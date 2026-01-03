import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dojs")
export default class DojController {
  @operation({
    summary: "Get Dojs",
  })
  @get()
  static getDojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doj",
  })
  @post("{id}")
  static createDoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
