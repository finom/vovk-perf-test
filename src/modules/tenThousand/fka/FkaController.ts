import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fka")
export default class FkaController {
  @operation({
    summary: "Get Fka",
  })
  @get()
  static getFka = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fka",
  })
  @post("{id}")
  static createFka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
