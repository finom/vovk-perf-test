import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiks")
export default class AikController {
  @operation({
    summary: "Get Aiks",
  })
  @get()
  static getAiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aik",
  })
  @post("{id}")
  static createAik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
