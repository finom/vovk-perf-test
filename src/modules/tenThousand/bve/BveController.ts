import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bves")
export default class BveController {
  @operation({
    summary: "Get Bves",
  })
  @get()
  static getBves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bve",
  })
  @post("{id}")
  static createBve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
