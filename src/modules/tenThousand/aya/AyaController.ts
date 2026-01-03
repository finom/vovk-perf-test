import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayas")
export default class AyaController {
  @operation({
    summary: "Get Ayas",
  })
  @get()
  static getAyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aya",
  })
  @post("{id}")
  static createAya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
