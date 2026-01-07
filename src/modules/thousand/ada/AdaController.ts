import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ada")
export default class AdaController {
  @operation({
    summary: "Get Ada",
  })
  @get()
  static getAda = procedure({
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
