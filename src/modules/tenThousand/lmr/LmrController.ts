import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmr")
export default class LmrController {
  @operation({
    summary: "Get Lmr",
  })
  @get()
  static getLmr = procedure({
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
