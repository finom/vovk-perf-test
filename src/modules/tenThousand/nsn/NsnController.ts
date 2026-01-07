import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsn")
export default class NsnController {
  @operation({
    summary: "Get Nsn",
  })
  @get()
  static getNsn = procedure({
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
