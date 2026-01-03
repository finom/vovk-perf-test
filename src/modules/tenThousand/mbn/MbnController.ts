import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbns")
export default class MbnController {
  @operation({
    summary: "Get Mbns",
  })
  @get()
  static getMbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbn",
  })
  @post("{id}")
  static createMbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
