import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekrs")
export default class EkrController {
  @operation({
    summary: "Get Ekrs",
  })
  @get()
  static getEkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekr",
  })
  @post("{id}")
  static createEkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
