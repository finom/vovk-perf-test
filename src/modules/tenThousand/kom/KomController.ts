import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kom")
export default class KomController {
  @operation({
    summary: "Get Kom",
  })
  @get()
  static getKom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kom",
  })
  @post("{id}")
  static createKom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
