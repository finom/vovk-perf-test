import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bes")
export default class BesController {
  @operation({
    summary: "Get Bes",
  })
  @get()
  static getBes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bes",
  })
  @post("{id}")
  static createBes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
