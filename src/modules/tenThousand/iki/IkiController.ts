import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iki")
export default class IkiController {
  @operation({
    summary: "Get Iki",
  })
  @get()
  static getIki = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iki",
  })
  @post("{id}")
  static createIki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
