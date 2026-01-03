import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aos")
export default class AoController {
  @operation({
    summary: "Get Aos",
  })
  @get()
  static getAos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ao",
  })
  @post("{id}")
  static createAo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
