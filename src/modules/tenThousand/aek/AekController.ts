import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aek")
export default class AekController {
  @operation({
    summary: "Get Aek",
  })
  @get()
  static getAek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aek",
  })
  @post("{id}")
  static createAek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
