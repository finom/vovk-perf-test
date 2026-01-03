import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akms")
export default class AkmController {
  @operation({
    summary: "Get Akms",
  })
  @get()
  static getAkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akm",
  })
  @post("{id}")
  static createAkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
