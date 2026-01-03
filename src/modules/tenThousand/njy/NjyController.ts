import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njies")
export default class NjyController {
  @operation({
    summary: "Get Njies",
  })
  @get()
  static getNjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njy",
  })
  @post("{id}")
  static createNjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
