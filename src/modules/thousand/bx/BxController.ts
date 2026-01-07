import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bx")
export default class BxController {
  @operation({
    summary: "Get Bx",
  })
  @get()
  static getBx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bx",
  })
  @post("{id}")
  static createBx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
