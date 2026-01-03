import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mizs")
export default class MizController {
  @operation({
    summary: "Get Mizs",
  })
  @get()
  static getMizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miz",
  })
  @post("{id}")
  static createMiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
