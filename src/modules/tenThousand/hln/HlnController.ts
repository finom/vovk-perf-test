import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hln")
export default class HlnController {
  @operation({
    summary: "Get Hln",
  })
  @get()
  static getHln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hln",
  })
  @post("{id}")
  static createHln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
