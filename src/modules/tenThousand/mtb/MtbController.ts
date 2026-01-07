import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtb")
export default class MtbController {
  @operation({
    summary: "Get Mtb",
  })
  @get()
  static getMtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtb",
  })
  @post("{id}")
  static createMtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
