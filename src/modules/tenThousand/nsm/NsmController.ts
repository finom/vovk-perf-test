import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsms")
export default class NsmController {
  @operation({
    summary: "Get Nsms",
  })
  @get()
  static getNsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsm",
  })
  @post("{id}")
  static createNsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
