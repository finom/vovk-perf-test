import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idis")
export default class IdiController {
  @operation({
    summary: "Get Idis",
  })
  @get()
  static getIdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idi",
  })
  @post("{id}")
  static createIdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
