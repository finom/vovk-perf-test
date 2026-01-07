import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mez")
export default class MezController {
  @operation({
    summary: "Get Mez",
  })
  @get()
  static getMez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mez",
  })
  @post("{id}")
  static createMez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
