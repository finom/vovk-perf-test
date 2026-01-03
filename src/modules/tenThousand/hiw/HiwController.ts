import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiws")
export default class HiwController {
  @operation({
    summary: "Get Hiws",
  })
  @get()
  static getHiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiw",
  })
  @post("{id}")
  static createHiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
