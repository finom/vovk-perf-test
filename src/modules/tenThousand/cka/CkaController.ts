import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cka")
export default class CkaController {
  @operation({
    summary: "Get Cka",
  })
  @get()
  static getCka = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cka",
  })
  @post("{id}")
  static createCka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
