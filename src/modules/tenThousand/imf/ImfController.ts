import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imfs")
export default class ImfController {
  @operation({
    summary: "Get Imfs",
  })
  @get()
  static getImfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imf",
  })
  @post("{id}")
  static createImf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
