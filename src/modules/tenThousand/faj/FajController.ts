import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faj")
export default class FajController {
  @operation({
    summary: "Get Faj",
  })
  @get()
  static getFaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faj",
  })
  @post("{id}")
  static createFaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
