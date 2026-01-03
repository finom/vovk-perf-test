import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exs")
export default class ExsController {
  @operation({
    summary: "Get Exs",
  })
  @get()
  static getExs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exs",
  })
  @post("{id}")
  static createExs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
