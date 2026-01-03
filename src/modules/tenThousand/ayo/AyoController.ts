import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayos")
export default class AyoController {
  @operation({
    summary: "Get Ayos",
  })
  @get()
  static getAyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayo",
  })
  @post("{id}")
  static createAyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
