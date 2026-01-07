import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxa")
export default class HxaController {
  @operation({
    summary: "Get Hxa",
  })
  @get()
  static getHxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxa",
  })
  @post("{id}")
  static createHxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
