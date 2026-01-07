import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afa")
export default class AfaController {
  @operation({
    summary: "Get Afa",
  })
  @get()
  static getAfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afa",
  })
  @post("{id}")
  static createAfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
