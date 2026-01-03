import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avvs")
export default class AvvController {
  @operation({
    summary: "Get Avvs",
  })
  @get()
  static getAvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avv",
  })
  @post("{id}")
  static createAvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
