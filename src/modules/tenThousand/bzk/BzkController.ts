import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzk")
export default class BzkController {
  @operation({
    summary: "Get Bzk",
  })
  @get()
  static getBzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzk",
  })
  @post("{id}")
  static createBzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
