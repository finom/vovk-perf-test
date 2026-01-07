import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpb")
export default class DpbController {
  @operation({
    summary: "Get Dpb",
  })
  @get()
  static getDpb = procedure({
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
