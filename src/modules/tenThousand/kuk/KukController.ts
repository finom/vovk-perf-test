import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuk")
export default class KukController {
  @operation({
    summary: "Get Kuk",
  })
  @get()
  static getKuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuk",
  })
  @post("{id}")
  static createKuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
