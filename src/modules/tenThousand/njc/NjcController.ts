import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njc")
export default class NjcController {
  @operation({
    summary: "Get Njc",
  })
  @get()
  static getNjc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njc",
  })
  @post("{id}")
  static createNjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
