import { procedure, prefix, get, post, operation } from "vovk";

@prefix("becs")
export default class BecController {
  @operation({
    summary: "Get Becs",
  })
  @get()
  static getBecs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bec",
  })
  @post("{id}")
  static createBec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
