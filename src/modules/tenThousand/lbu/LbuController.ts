import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbus")
export default class LbuController {
  @operation({
    summary: "Get Lbus",
  })
  @get()
  static getLbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbu",
  })
  @post("{id}")
  static createLbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
