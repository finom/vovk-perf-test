import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akus")
export default class AkuController {
  @operation({
    summary: "Get Akus",
  })
  @get()
  static getAkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aku",
  })
  @post("{id}")
  static createAku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
