import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyo")
export default class EyoController {
  @operation({
    summary: "Get Eyo",
  })
  @get()
  static getEyo = procedure({
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
