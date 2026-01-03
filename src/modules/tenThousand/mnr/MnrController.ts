import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnrs")
export default class MnrController {
  @operation({
    summary: "Get Mnrs",
  })
  @get()
  static getMnrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnr",
  })
  @post("{id}")
  static createMnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
