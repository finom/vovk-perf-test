import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mors")
export default class MorController {
  @operation({
    summary: "Get Mors",
  })
  @get()
  static getMors = procedure({
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
