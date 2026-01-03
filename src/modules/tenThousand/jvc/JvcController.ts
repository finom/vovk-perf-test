import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvcs")
export default class JvcController {
  @operation({
    summary: "Get Jvcs",
  })
  @get()
  static getJvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvc",
  })
  @post("{id}")
  static createJvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
