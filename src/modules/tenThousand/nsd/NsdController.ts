import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsds")
export default class NsdController {
  @operation({
    summary: "Get Nsds",
  })
  @get()
  static getNsds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsd",
  })
  @post("{id}")
  static createNsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
