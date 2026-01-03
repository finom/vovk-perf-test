import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnbs")
export default class DnbController {
  @operation({
    summary: "Get Dnbs",
  })
  @get()
  static getDnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnb",
  })
  @post("{id}")
  static createDnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
