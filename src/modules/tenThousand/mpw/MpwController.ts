import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpws")
export default class MpwController {
  @operation({
    summary: "Get Mpws",
  })
  @get()
  static getMpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpw",
  })
  @post("{id}")
  static createMpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
