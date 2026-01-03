import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkxes")
export default class DkxController {
  @operation({
    summary: "Get Dkxes",
  })
  @get()
  static getDkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkx",
  })
  @post("{id}")
  static createDkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
