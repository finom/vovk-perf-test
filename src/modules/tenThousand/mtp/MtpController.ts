import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtp")
export default class MtpController {
  @operation({
    summary: "Get Mtp",
  })
  @get()
  static getMtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtp",
  })
  @post("{id}")
  static createMtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
