import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbe")
export default class BbeController {
  @operation({
    summary: "Get Bbe",
  })
  @get()
  static getBbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbe",
  })
  @post("{id}")
  static createBbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
