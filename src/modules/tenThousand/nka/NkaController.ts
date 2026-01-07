import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nka")
export default class NkaController {
  @operation({
    summary: "Get Nka",
  })
  @get()
  static getNka = procedure({
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
