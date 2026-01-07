import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btk")
export default class BtkController {
  @operation({
    summary: "Get Btk",
  })
  @get()
  static getBtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btk",
  })
  @post("{id}")
  static createBtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
