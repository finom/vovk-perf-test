import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lol")
export default class LolController {
  @operation({
    summary: "Get Lol",
  })
  @get()
  static getLol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lol",
  })
  @post("{id}")
  static createLol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
