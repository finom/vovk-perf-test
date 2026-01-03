import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mves")
export default class MveController {
  @operation({
    summary: "Get Mves",
  })
  @get()
  static getMves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mve",
  })
  @post("{id}")
  static createMve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
