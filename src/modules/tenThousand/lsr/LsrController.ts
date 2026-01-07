import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsr")
export default class LsrController {
  @operation({
    summary: "Get Lsr",
  })
  @get()
  static getLsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsr",
  })
  @post("{id}")
  static createLsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
