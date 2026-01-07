import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daz")
export default class DazController {
  @operation({
    summary: "Get Daz",
  })
  @get()
  static getDaz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Daz",
  })
  @post("{id}")
  static createDaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
