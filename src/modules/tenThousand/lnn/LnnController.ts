import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnn")
export default class LnnController {
  @operation({
    summary: "Get Lnn",
  })
  @get()
  static getLnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnn",
  })
  @post("{id}")
  static createLnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
