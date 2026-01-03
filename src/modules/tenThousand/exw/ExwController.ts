import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exws")
export default class ExwController {
  @operation({
    summary: "Get Exws",
  })
  @get()
  static getExws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exw",
  })
  @post("{id}")
  static createExw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
