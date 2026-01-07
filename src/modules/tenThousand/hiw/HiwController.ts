import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiw")
export default class HiwController {
  @operation({
    summary: "Get Hiw",
  })
  @get()
  static getHiw = procedure({
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
