import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mor")
export default class MorController {
  @operation({
    summary: "Get Mor",
  })
  @get()
  static getMor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mor",
  })
  @post("{id}")
  static createMor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
