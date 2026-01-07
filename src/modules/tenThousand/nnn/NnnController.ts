import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnn")
export default class NnnController {
  @operation({
    summary: "Get Nnn",
  })
  @get()
  static getNnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnn",
  })
  @post("{id}")
  static createNnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
