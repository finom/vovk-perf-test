import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtk")
export default class DtkController {
  @operation({
    summary: "Get Dtk",
  })
  @get()
  static getDtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtk",
  })
  @post("{id}")
  static createDtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
