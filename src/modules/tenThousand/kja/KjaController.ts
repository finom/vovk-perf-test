import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjas")
export default class KjaController {
  @operation({
    summary: "Get Kjas",
  })
  @get()
  static getKjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kja",
  })
  @post("{id}")
  static createKja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
