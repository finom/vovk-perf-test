import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnm")
export default class MnmController {
  @operation({
    summary: "Get Mnm",
  })
  @get()
  static getMnm = procedure({
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
