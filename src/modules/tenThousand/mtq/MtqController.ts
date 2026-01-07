import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtq")
export default class MtqController {
  @operation({
    summary: "Get Mtq",
  })
  @get()
  static getMtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtq",
  })
  @post("{id}")
  static createMtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
