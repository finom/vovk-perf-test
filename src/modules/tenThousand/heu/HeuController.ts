import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heus")
export default class HeuController {
  @operation({
    summary: "Get Heus",
  })
  @get()
  static getHeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heu",
  })
  @post("{id}")
  static createHeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
