import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akz")
export default class AkzController {
  @operation({
    summary: "Get Akz",
  })
  @get()
  static getAkz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akz",
  })
  @post("{id}")
  static createAkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
