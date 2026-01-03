import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnms")
export default class MnmController {
  @operation({
    summary: "Get Mnms",
  })
  @get()
  static getMnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnm",
  })
  @post("{id}")
  static createMnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
