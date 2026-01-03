import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njxes")
export default class NjxController {
  @operation({
    summary: "Get Njxes",
  })
  @get()
  static getNjxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njx",
  })
  @post("{id}")
  static createNjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
