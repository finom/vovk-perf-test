import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hug")
export default class HugController {
  @operation({
    summary: "Get Hug",
  })
  @get()
  static getHug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hug",
  })
  @post("{id}")
  static createHug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
