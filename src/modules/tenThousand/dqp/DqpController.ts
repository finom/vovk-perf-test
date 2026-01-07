import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqp")
export default class DqpController {
  @operation({
    summary: "Get Dqp",
  })
  @get()
  static getDqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqp",
  })
  @post("{id}")
  static createDqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
