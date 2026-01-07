import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibj")
export default class IbjController {
  @operation({
    summary: "Get Ibj",
  })
  @get()
  static getIbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibj",
  })
  @post("{id}")
  static createIbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
