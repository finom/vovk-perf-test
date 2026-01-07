import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhg")
export default class MhgController {
  @operation({
    summary: "Get Mhg",
  })
  @get()
  static getMhg = procedure({
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
