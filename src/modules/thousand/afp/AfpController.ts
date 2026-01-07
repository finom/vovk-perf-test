import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afp")
export default class AfpController {
  @operation({
    summary: "Get Afp",
  })
  @get()
  static getAfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afp",
  })
  @post("{id}")
  static createAfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
