import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtds")
export default class JtdController {
  @operation({
    summary: "Get Jtds",
  })
  @get()
  static getJtds = procedure({
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
