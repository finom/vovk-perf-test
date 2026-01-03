import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avxes")
export default class AvxController {
  @operation({
    summary: "Get Avxes",
  })
  @get()
  static getAvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avx",
  })
  @post("{id}")
  static createAvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
