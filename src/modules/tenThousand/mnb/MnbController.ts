import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnb")
export default class MnbController {
  @operation({
    summary: "Get Mnb",
  })
  @get()
  static getMnb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnb",
  })
  @post("{id}")
  static createMnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
