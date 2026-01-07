import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsz")
export default class NszController {
  @operation({
    summary: "Get Nsz",
  })
  @get()
  static getNsz = procedure({
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
