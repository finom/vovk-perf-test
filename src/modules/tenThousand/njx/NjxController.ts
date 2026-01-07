import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njx")
export default class NjxController {
  @operation({
    summary: "Get Njx",
  })
  @get()
  static getNjx = procedure({
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
