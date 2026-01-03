import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klqs")
export default class KlqController {
  @operation({
    summary: "Get Klqs",
  })
  @get()
  static getKlqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klq",
  })
  @post("{id}")
  static createKlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
