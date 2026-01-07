import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muz")
export default class MuzController {
  @operation({
    summary: "Get Muz",
  })
  @get()
  static getMuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muz",
  })
  @post("{id}")
  static createMuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
