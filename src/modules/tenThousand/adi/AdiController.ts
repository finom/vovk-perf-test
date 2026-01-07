import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adi")
export default class AdiController {
  @operation({
    summary: "Get Adi",
  })
  @get()
  static getAdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adi",
  })
  @post("{id}")
  static createAdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
