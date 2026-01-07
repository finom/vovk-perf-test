import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkp")
export default class DkpController {
  @operation({
    summary: "Get Dkp",
  })
  @get()
  static getDkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkp",
  })
  @post("{id}")
  static createDkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
