import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbl")
export default class HblController {
  @operation({
    summary: "Get Hbl",
  })
  @get()
  static getHbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbl",
  })
  @post("{id}")
  static createHbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
