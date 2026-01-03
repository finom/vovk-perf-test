import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mups")
export default class MupController {
  @operation({
    summary: "Get Mups",
  })
  @get()
  static getMups = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mup",
  })
  @post("{id}")
  static createMup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
