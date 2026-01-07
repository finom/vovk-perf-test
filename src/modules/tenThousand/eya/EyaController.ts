import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eya")
export default class EyaController {
  @operation({
    summary: "Get Eya",
  })
  @get()
  static getEya = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eya",
  })
  @post("{id}")
  static createEya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
