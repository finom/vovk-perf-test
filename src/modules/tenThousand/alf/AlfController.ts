import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alf")
export default class AlfController {
  @operation({
    summary: "Get Alf",
  })
  @get()
  static getAlf = procedure({
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
