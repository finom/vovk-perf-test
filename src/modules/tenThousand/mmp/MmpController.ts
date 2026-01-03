import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmps")
export default class MmpController {
  @operation({
    summary: "Get Mmps",
  })
  @get()
  static getMmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmp",
  })
  @post("{id}")
  static createMmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
