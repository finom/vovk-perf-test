import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsses")
export default class NssController {
  @operation({
    summary: "Get Nsses",
  })
  @get()
  static getNsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nss",
  })
  @post("{id}")
  static createNss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
