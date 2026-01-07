import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktu")
export default class KtuController {
  @operation({
    summary: "Get Ktu",
  })
  @get()
  static getKtu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktu",
  })
  @post("{id}")
  static createKtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
