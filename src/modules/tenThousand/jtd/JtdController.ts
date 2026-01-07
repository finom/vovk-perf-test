import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtd")
export default class JtdController {
  @operation({
    summary: "Get Jtd",
  })
  @get()
  static getJtd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtd",
  })
  @post("{id}")
  static createJtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
