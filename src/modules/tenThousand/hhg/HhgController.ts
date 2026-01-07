import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhg")
export default class HhgController {
  @operation({
    summary: "Get Hhg",
  })
  @get()
  static getHhg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhg",
  })
  @post("{id}")
  static createHhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
