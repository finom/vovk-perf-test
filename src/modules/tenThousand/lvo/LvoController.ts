import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvos")
export default class LvoController {
  @operation({
    summary: "Get Lvos",
  })
  @get()
  static getLvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvo",
  })
  @post("{id}")
  static createLvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
