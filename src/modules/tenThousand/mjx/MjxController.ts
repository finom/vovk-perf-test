import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjxes")
export default class MjxController {
  @operation({
    summary: "Get Mjxes",
  })
  @get()
  static getMjxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjx",
  })
  @post("{id}")
  static createMjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
