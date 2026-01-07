import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccj")
export default class CcjController {
  @operation({
    summary: "Get Ccj",
  })
  @get()
  static getCcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccj",
  })
  @post("{id}")
  static createCcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
