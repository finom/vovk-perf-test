import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvxes")
export default class DvxController {
  @operation({
    summary: "Get Dvxes",
  })
  @get()
  static getDvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvx",
  })
  @post("{id}")
  static createDvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
