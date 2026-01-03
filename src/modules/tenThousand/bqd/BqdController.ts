import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqds")
export default class BqdController {
  @operation({
    summary: "Get Bqds",
  })
  @get()
  static getBqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqd",
  })
  @post("{id}")
  static createBqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
