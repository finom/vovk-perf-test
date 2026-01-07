import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnn")
export default class JnnController {
  @operation({
    summary: "Get Jnn",
  })
  @get()
  static getJnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnn",
  })
  @post("{id}")
  static createJnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
