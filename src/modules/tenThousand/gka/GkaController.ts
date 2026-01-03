import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkas")
export default class GkaController {
  @operation({
    summary: "Get Gkas",
  })
  @get()
  static getGkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gka",
  })
  @post("{id}")
  static createGka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
