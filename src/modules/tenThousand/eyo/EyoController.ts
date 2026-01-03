import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyos")
export default class EyoController {
  @operation({
    summary: "Get Eyos",
  })
  @get()
  static getEyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyo",
  })
  @post("{id}")
  static createEyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
