import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijg")
export default class IjgController {
  @operation({
    summary: "Get Ijg",
  })
  @get()
  static getIjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijg",
  })
  @post("{id}")
  static createIjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
