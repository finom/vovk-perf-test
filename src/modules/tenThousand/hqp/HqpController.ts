import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqp")
export default class HqpController {
  @operation({
    summary: "Get Hqp",
  })
  @get()
  static getHqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqp",
  })
  @post("{id}")
  static createHqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
