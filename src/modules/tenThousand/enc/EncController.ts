import { procedure, prefix, get, post, operation } from "vovk";

@prefix("encs")
export default class EncController {
  @operation({
    summary: "Get Encs",
  })
  @get()
  static getEncs = procedure({
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
