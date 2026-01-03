import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqps")
export default class CqpController {
  @operation({
    summary: "Get Cqps",
  })
  @get()
  static getCqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqp",
  })
  @post("{id}")
  static createCqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
