import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cops")
export default class CopController {
  @operation({
    summary: "Get Cops",
  })
  @get()
  static getCops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cop",
  })
  @post("{id}")
  static createCop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
