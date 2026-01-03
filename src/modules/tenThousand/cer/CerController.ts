import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cers")
export default class CerController {
  @operation({
    summary: "Get Cers",
  })
  @get()
  static getCers = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cer",
  })
  @post("{id}")
  static createCer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
