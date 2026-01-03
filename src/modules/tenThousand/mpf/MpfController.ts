import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpfs")
export default class MpfController {
  @operation({
    summary: "Get Mpfs",
  })
  @get()
  static getMpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpf",
  })
  @post("{id}")
  static createMpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
