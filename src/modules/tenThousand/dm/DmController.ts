import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dm")
export default class DmController {
  @operation({
    summary: "Get Dm",
  })
  @get()
  static getDm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dm",
  })
  @post("{id}")
  static createDm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
