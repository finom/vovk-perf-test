import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luo")
export default class LuoController {
  @operation({
    summary: "Get Luo",
  })
  @get()
  static getLuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luo",
  })
  @post("{id}")
  static createLuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
