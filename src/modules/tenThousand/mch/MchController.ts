import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mches")
export default class MchController {
  @operation({
    summary: "Get Mches",
  })
  @get()
  static getMches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mch",
  })
  @post("{id}")
  static createMch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
