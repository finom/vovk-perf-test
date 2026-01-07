import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijx")
export default class IjxController {
  @operation({
    summary: "Get Ijx",
  })
  @get()
  static getIjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijx",
  })
  @post("{id}")
  static createIjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
