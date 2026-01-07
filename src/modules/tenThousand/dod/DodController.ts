import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dod")
export default class DodController {
  @operation({
    summary: "Get Dod",
  })
  @get()
  static getDod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dod",
  })
  @post("{id}")
  static createDod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
