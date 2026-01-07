import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fja")
export default class FjaController {
  @operation({
    summary: "Get Fja",
  })
  @get()
  static getFja = procedure({
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
