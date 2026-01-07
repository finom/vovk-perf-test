import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnn")
export default class MnnController {
  @operation({
    summary: "Get Mnn",
  })
  @get()
  static getMnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnn",
  })
  @post("{id}")
  static createMnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
