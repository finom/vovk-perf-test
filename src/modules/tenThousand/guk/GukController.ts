import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guk")
export default class GukController {
  @operation({
    summary: "Get Guk",
  })
  @get()
  static getGuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guk",
  })
  @post("{id}")
  static createGuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
