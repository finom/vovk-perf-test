import { procedure, prefix, get, post, operation } from "vovk";

@prefix("te")
export default class TeController {
  @operation({
    summary: "Get Te",
  })
  @get()
  static getTe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Te",
  })
  @post("{id}")
  static createTe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
