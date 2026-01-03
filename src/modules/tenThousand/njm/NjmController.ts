import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njms")
export default class NjmController {
  @operation({
    summary: "Get Njms",
  })
  @get()
  static getNjms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njm",
  })
  @post("{id}")
  static createNjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
