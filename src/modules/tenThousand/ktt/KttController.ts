import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktts")
export default class KttController {
  @operation({
    summary: "Get Ktts",
  })
  @get()
  static getKtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktt",
  })
  @post("{id}")
  static createKtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
