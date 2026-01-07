import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akm")
export default class AkmController {
  @operation({
    summary: "Get Akm",
  })
  @get()
  static getAkm = procedure({
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
