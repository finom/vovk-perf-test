import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjas")
export default class FjaController {
  @operation({
    summary: "Get Fjas",
  })
  @get()
  static getFjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fja",
  })
  @post("{id}")
  static createFja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
