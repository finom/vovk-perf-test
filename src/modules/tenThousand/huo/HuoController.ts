import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huo")
export default class HuoController {
  @operation({
    summary: "Get Huo",
  })
  @get()
  static getHuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huo",
  })
  @post("{id}")
  static createHuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
