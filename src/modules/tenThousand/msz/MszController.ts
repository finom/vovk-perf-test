import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mszs")
export default class MszController {
  @operation({
    summary: "Get Mszs",
  })
  @get()
  static getMszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msz",
  })
  @post("{id}")
  static createMsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
