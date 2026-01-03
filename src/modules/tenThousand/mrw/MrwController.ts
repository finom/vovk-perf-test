import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrws")
export default class MrwController {
  @operation({
    summary: "Get Mrws",
  })
  @get()
  static getMrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrw",
  })
  @post("{id}")
  static createMrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
