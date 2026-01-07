import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkw")
export default class DkwController {
  @operation({
    summary: "Get Dkw",
  })
  @get()
  static getDkw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkw",
  })
  @post("{id}")
  static createDkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
