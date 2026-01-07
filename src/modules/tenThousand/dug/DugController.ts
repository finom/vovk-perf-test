import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dug")
export default class DugController {
  @operation({
    summary: "Get Dug",
  })
  @get()
  static getDug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dug",
  })
  @post("{id}")
  static createDug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
