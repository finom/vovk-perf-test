import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njy")
export default class NjyController {
  @operation({
    summary: "Get Njy",
  })
  @get()
  static getNjy = procedure({
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
