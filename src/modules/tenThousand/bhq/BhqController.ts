import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhq")
export default class BhqController {
  @operation({
    summary: "Get Bhq",
  })
  @get()
  static getBhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhq",
  })
  @post("{id}")
  static createBhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
