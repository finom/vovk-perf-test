import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akfs")
export default class AkfController {
  @operation({
    summary: "Get Akfs",
  })
  @get()
  static getAkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akf",
  })
  @post("{id}")
  static createAkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
