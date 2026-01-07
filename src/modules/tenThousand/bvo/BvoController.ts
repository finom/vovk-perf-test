import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvo")
export default class BvoController {
  @operation({
    summary: "Get Bvo",
  })
  @get()
  static getBvo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvo",
  })
  @post("{id}")
  static createBvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
