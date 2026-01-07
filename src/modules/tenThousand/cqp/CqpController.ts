import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqp")
export default class CqpController {
  @operation({
    summary: "Get Cqp",
  })
  @get()
  static getCqp = procedure({
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
