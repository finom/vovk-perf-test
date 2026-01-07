import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqp")
export default class JqpController {
  @operation({
    summary: "Get Jqp",
  })
  @get()
  static getJqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqp",
  })
  @post("{id}")
  static createJqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
