import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtt")
export default class DttController {
  @operation({
    summary: "Get Dtt",
  })
  @get()
  static getDtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtt",
  })
  @post("{id}")
  static createDtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
