import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqrs")
export default class BqrController {
  @operation({
    summary: "Get Bqrs",
  })
  @get()
  static getBqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqr",
  })
  @post("{id}")
  static createBqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
