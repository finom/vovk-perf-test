import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efbs")
export default class EfbController {
  @operation({
    summary: "Get Efbs",
  })
  @get()
  static getEfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efb",
  })
  @post("{id}")
  static createEfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
