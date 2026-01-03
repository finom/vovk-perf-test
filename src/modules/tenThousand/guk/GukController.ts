import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guks")
export default class GukController {
  @operation({
    summary: "Get Guks",
  })
  @get()
  static getGuks = procedure({
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
