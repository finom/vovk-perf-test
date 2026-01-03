import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfws")
export default class HfwController {
  @operation({
    summary: "Get Hfws",
  })
  @get()
  static getHfws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfw",
  })
  @post("{id}")
  static createHfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
