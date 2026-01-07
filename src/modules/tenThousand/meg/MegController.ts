import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meg")
export default class MegController {
  @operation({
    summary: "Get Meg",
  })
  @get()
  static getMeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meg",
  })
  @post("{id}")
  static createMeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
