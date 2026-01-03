import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alves")
export default class AlfController {
  @operation({
    summary: "Get Alves",
  })
  @get()
  static getAlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alf",
  })
  @post("{id}")
  static createAlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
