import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjx")
export default class MjxController {
  @operation({
    summary: "Get Mjx",
  })
  @get()
  static getMjx = procedure({
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
