import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giu")
export default class GiuController {
  @operation({
    summary: "Get Giu",
  })
  @get()
  static getGiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giu",
  })
  @post("{id}")
  static createGiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
