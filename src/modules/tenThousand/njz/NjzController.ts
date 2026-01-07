import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njz")
export default class NjzController {
  @operation({
    summary: "Get Njz",
  })
  @get()
  static getNjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njz",
  })
  @post("{id}")
  static createNjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
