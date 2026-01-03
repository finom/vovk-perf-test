import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dves")
export default class DveController {
  @operation({
    summary: "Get Dves",
  })
  @get()
  static getDves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dve",
  })
  @post("{id}")
  static createDve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
