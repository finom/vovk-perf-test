import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsxes")
export default class NsxController {
  @operation({
    summary: "Get Nsxes",
  })
  @get()
  static getNsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsx",
  })
  @post("{id}")
  static createNsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
