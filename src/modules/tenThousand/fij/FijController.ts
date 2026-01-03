import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fijs")
export default class FijController {
  @operation({
    summary: "Get Fijs",
  })
  @get()
  static getFijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fij",
  })
  @post("{id}")
  static createFij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
