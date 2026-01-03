import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fozs")
export default class FozController {
  @operation({
    summary: "Get Fozs",
  })
  @get()
  static getFozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foz",
  })
  @post("{id}")
  static createFoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
