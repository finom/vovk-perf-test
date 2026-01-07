import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktf")
export default class KtfController {
  @operation({
    summary: "Get Ktf",
  })
  @get()
  static getKtf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktf",
  })
  @post("{id}")
  static createKtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
