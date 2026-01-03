import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvms")
export default class HvmController {
  @operation({
    summary: "Get Hvms",
  })
  @get()
  static getHvms = procedure({
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
