import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoos")
export default class HooController {
  @operation({
    summary: "Get Hoos",
  })
  @get()
  static getHoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoo",
  })
  @post("{id}")
  static createHoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
