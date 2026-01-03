import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhgs")
export default class MhgController {
  @operation({
    summary: "Get Mhgs",
  })
  @get()
  static getMhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhg",
  })
  @post("{id}")
  static createMhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
