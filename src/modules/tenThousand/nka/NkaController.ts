import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkas")
export default class NkaController {
  @operation({
    summary: "Get Nkas",
  })
  @get()
  static getNkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nka",
  })
  @post("{id}")
  static createNka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
