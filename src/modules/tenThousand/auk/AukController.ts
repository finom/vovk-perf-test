import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auk")
export default class AukController {
  @operation({
    summary: "Get Auk",
  })
  @get()
  static getAuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auk",
  })
  @post("{id}")
  static createAuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
