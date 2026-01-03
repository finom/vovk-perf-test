import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adis")
export default class AdiController {
  @operation({
    summary: "Get Adis",
  })
  @get()
  static getAdis = procedure({
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
