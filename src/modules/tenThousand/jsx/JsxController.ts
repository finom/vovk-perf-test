import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsx")
export default class JsxController {
  @operation({
    summary: "Get Jsx",
  })
  @get()
  static getJsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsx",
  })
  @post("{id}")
  static createJsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
