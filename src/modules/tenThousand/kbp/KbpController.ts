import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbps")
export default class KbpController {
  @operation({
    summary: "Get Kbps",
  })
  @get()
  static getKbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbp",
  })
  @post("{id}")
  static createKbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
