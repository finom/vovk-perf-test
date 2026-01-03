import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqps")
export default class DqpController {
  @operation({
    summary: "Get Dqps",
  })
  @get()
  static getDqps = procedure({
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
