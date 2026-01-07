import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mry")
export default class MryController {
  @operation({
    summary: "Get Mry",
  })
  @get()
  static getMry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mry",
  })
  @post("{id}")
  static createMry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
