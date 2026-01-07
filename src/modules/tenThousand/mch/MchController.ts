import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mch")
export default class MchController {
  @operation({
    summary: "Get Mch",
  })
  @get()
  static getMch = procedure({
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
