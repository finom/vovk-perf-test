import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lka")
export default class LkaController {
  @operation({
    summary: "Get Lka",
  })
  @get()
  static getLka = procedure({
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
