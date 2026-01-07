import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsr")
export default class JsrController {
  @operation({
    summary: "Get Jsr",
  })
  @get()
  static getJsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsr",
  })
  @post("{id}")
  static createJsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
