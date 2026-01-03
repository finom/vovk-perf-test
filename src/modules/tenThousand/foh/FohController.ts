import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fohs")
export default class FohController {
  @operation({
    summary: "Get Fohs",
  })
  @get()
  static getFohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foh",
  })
  @post("{id}")
  static createFoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
