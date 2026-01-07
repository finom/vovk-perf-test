import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akp")
export default class AkpController {
  @operation({
    summary: "Get Akp",
  })
  @get()
  static getAkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akp",
  })
  @post("{id}")
  static createAkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
