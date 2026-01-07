import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dff")
export default class DffController {
  @operation({
    summary: "Get Dff",
  })
  @get()
  static getDff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dff",
  })
  @post("{id}")
  static createDff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
