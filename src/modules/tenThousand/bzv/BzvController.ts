import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzvs")
export default class BzvController {
  @operation({
    summary: "Get Bzvs",
  })
  @get()
  static getBzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzv",
  })
  @post("{id}")
  static createBzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
