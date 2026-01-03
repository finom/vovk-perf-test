import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vos")
export default class VoController {
  @operation({
    summary: "Get Vos",
  })
  @get()
  static getVos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vo",
  })
  @post("{id}")
  static createVo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
