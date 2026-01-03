import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzxes")
export default class MzxController {
  @operation({
    summary: "Get Mzxes",
  })
  @get()
  static getMzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzx",
  })
  @post("{id}")
  static createMzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
