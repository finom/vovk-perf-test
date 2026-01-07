import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpb")
export default class MpbController {
  @operation({
    summary: "Get Mpb",
  })
  @get()
  static getMpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpb",
  })
  @post("{id}")
  static createMpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
