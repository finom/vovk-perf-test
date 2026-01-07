import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kye")
export default class KyeController {
  @operation({
    summary: "Get Kye",
  })
  @get()
  static getKye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kye",
  })
  @post("{id}")
  static createKye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
