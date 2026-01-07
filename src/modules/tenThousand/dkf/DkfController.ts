import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkf")
export default class DkfController {
  @operation({
    summary: "Get Dkf",
  })
  @get()
  static getDkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkf",
  })
  @post("{id}")
  static createDkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
