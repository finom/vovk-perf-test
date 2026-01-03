import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsns")
export default class NsnController {
  @operation({
    summary: "Get Nsns",
  })
  @get()
  static getNsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsn",
  })
  @post("{id}")
  static createNsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
