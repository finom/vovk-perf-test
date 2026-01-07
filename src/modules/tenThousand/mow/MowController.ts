import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mow")
export default class MowController {
  @operation({
    summary: "Get Mow",
  })
  @get()
  static getMow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mow",
  })
  @post("{id}")
  static createMow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
