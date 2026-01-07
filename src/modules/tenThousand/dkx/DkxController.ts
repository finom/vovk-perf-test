import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkx")
export default class DkxController {
  @operation({
    summary: "Get Dkx",
  })
  @get()
  static getDkx = procedure({
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
