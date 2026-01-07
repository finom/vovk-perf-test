import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mj")
export default class MjController {
  @operation({
    summary: "Get Mj",
  })
  @get()
  static getMj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mj",
  })
  @post("{id}")
  static createMj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
