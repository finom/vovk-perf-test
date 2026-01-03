import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lihs")
export default class LihController {
  @operation({
    summary: "Get Lihs",
  })
  @get()
  static getLihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lih",
  })
  @post("{id}")
  static createLih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
