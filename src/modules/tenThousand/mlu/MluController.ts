import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlu")
export default class MluController {
  @operation({
    summary: "Get Mlu",
  })
  @get()
  static getMlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlu",
  })
  @post("{id}")
  static createMlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
