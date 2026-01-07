import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eka")
export default class EkaController {
  @operation({
    summary: "Get Eka",
  })
  @get()
  static getEka = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eka",
  })
  @post("{id}")
  static createEka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
