import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ija")
export default class IjaController {
  @operation({
    summary: "Get Ija",
  })
  @get()
  static getIja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ija",
  })
  @post("{id}")
  static createIja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
