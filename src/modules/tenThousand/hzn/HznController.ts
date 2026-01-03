import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzns")
export default class HznController {
  @operation({
    summary: "Get Hzns",
  })
  @get()
  static getHzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzn",
  })
  @post("{id}")
  static createHzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
