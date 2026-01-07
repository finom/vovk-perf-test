import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvm")
export default class HvmController {
  @operation({
    summary: "Get Hvm",
  })
  @get()
  static getHvm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvm",
  })
  @post("{id}")
  static createHvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
