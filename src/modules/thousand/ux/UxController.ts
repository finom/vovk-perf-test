import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ux")
export default class UxController {
  @operation({
    summary: "Get Ux",
  })
  @get()
  static getUx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ux",
  })
  @post("{id}")
  static createUx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
