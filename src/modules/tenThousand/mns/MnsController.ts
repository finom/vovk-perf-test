import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mns")
export default class MnsController {
  @operation({
    summary: "Get Mns",
  })
  @get()
  static getMns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mns",
  })
  @post("{id}")
  static createMns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
