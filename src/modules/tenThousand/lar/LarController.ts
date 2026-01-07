import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lar")
export default class LarController {
  @operation({
    summary: "Get Lar",
  })
  @get()
  static getLar = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lar",
  })
  @post("{id}")
  static createLar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
