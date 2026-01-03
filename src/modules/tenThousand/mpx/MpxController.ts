import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpxes")
export default class MpxController {
  @operation({
    summary: "Get Mpxes",
  })
  @get()
  static getMpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpx",
  })
  @post("{id}")
  static createMpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
