import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkas")
export default class LkaController {
  @operation({
    summary: "Get Lkas",
  })
  @get()
  static getLkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lka",
  })
  @post("{id}")
  static createLka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
