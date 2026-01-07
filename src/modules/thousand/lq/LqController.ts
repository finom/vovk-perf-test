import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lq")
export default class LqController {
  @operation({
    summary: "Get Lq",
  })
  @get()
  static getLq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lq",
  })
  @post("{id}")
  static createLq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
