import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrd")
export default class MrdController {
  @operation({
    summary: "Get Mrd",
  })
  @get()
  static getMrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrd",
  })
  @post("{id}")
  static createMrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
