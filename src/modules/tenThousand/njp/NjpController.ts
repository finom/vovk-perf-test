import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njp")
export default class NjpController {
  @operation({
    summary: "Get Njp",
  })
  @get()
  static getNjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njp",
  })
  @post("{id}")
  static createNjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
