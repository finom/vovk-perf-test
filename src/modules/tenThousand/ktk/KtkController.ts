import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktks")
export default class KtkController {
  @operation({
    summary: "Get Ktks",
  })
  @get()
  static getKtks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktk",
  })
  @post("{id}")
  static createKtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
