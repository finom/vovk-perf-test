import { procedure, prefix, get, post, operation } from "vovk";

@prefix("on")
export default class OnController {
  @operation({
    summary: "Get On",
  })
  @get()
  static getOn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create On",
  })
  @post("{id}")
  static createOn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
