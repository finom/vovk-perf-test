import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lijs")
export default class LijController {
  @operation({
    summary: "Get Lijs",
  })
  @get()
  static getLijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lij",
  })
  @post("{id}")
  static createLij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
