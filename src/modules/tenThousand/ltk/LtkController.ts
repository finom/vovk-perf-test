import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltk")
export default class LtkController {
  @operation({
    summary: "Get Ltk",
  })
  @get()
  static getLtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltk",
  })
  @post("{id}")
  static createLtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
