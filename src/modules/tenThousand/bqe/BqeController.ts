import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqes")
export default class BqeController {
  @operation({
    summary: "Get Bqes",
  })
  @get()
  static getBqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqe",
  })
  @post("{id}")
  static createBqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
