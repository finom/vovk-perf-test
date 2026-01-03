import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtbs")
export default class MtbController {
  @operation({
    summary: "Get Mtbs",
  })
  @get()
  static getMtbs = procedure({
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
