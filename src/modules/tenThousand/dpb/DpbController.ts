import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpbs")
export default class DpbController {
  @operation({
    summary: "Get Dpbs",
  })
  @get()
  static getDpbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpb",
  })
  @post("{id}")
  static createDpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
