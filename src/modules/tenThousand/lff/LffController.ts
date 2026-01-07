import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lff")
export default class LffController {
  @operation({
    summary: "Get Lff",
  })
  @get()
  static getLff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lff",
  })
  @post("{id}")
  static createLff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
