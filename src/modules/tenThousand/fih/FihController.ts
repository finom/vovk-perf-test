import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fihs")
export default class FihController {
  @operation({
    summary: "Get Fihs",
  })
  @get()
  static getFihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fih",
  })
  @post("{id}")
  static createFih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
