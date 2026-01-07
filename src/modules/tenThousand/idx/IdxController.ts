import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idx")
export default class IdxController {
  @operation({
    summary: "Get Idx",
  })
  @get()
  static getIdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idx",
  })
  @post("{id}")
  static createIdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
