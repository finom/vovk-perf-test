import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njv")
export default class NjvController {
  @operation({
    summary: "Get Njv",
  })
  @get()
  static getNjv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njv",
  })
  @post("{id}")
  static createNjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
