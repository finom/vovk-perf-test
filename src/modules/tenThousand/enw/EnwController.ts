import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enws")
export default class EnwController {
  @operation({
    summary: "Get Enws",
  })
  @get()
  static getEnws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enw",
  })
  @post("{id}")
  static createEnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
