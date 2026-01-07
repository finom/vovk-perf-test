import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccq")
export default class CcqController {
  @operation({
    summary: "Get Ccq",
  })
  @get()
  static getCcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccq",
  })
  @post("{id}")
  static createCcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
