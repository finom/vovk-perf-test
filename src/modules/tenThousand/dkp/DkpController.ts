import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkps")
export default class DkpController {
  @operation({
    summary: "Get Dkps",
  })
  @get()
  static getDkps = procedure({
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
