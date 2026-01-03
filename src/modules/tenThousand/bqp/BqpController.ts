import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqps")
export default class BqpController {
  @operation({
    summary: "Get Bqps",
  })
  @get()
  static getBqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqp",
  })
  @post("{id}")
  static createBqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
