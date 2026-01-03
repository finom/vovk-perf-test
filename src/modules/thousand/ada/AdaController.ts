import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adas")
export default class AdaController {
  @operation({
    summary: "Get Adas",
  })
  @get()
  static getAdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ada",
  })
  @post("{id}")
  static createAda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
