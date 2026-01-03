import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nszs")
export default class NszController {
  @operation({
    summary: "Get Nszs",
  })
  @get()
  static getNszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsz",
  })
  @post("{id}")
  static createNsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
