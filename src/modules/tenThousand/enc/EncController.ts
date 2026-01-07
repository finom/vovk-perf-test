import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enc")
export default class EncController {
  @operation({
    summary: "Get Enc",
  })
  @get()
  static getEnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enc",
  })
  @post("{id}")
  static createEnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
