import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vo")
export default class VoController {
  @operation({
    summary: "Get Vo",
  })
  @get()
  static getVo = procedure({
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
