import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmrs")
export default class LmrController {
  @operation({
    summary: "Get Lmrs",
  })
  @get()
  static getLmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmr",
  })
  @post("{id}")
  static createLmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
