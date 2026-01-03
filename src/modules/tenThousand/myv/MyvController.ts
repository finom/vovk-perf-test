import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myvs")
export default class MyvController {
  @operation({
    summary: "Get Myvs",
  })
  @get()
  static getMyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myv",
  })
  @post("{id}")
  static createMyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
