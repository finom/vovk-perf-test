import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akts")
export default class AktController {
  @operation({
    summary: "Get Akts",
  })
  @get()
  static getAkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akt",
  })
  @post("{id}")
  static createAkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
