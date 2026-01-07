import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgq")
export default class BgqController {
  @operation({
    summary: "Get Bgq",
  })
  @get()
  static getBgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgq",
  })
  @post("{id}")
  static createBgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
