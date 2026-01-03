import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loes")
export default class LoeController {
  @operation({
    summary: "Get Loes",
  })
  @get()
  static getLoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loe",
  })
  @post("{id}")
  static createLoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
