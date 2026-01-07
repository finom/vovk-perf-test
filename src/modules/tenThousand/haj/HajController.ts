import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haj")
export default class HajController {
  @operation({
    summary: "Get Haj",
  })
  @get()
  static getHaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haj",
  })
  @post("{id}")
  static createHaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
