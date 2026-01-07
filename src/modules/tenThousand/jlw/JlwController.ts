import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlw")
export default class JlwController {
  @operation({
    summary: "Get Jlw",
  })
  @get()
  static getJlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlw",
  })
  @post("{id}")
  static createJlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
