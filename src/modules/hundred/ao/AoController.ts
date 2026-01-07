import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ao")
export default class AoController {
  @operation({
    summary: "Get Ao",
  })
  @get()
  static getAo = procedure({
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
