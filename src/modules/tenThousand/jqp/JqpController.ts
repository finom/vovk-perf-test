import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqps")
export default class JqpController {
  @operation({
    summary: "Get Jqps",
  })
  @get()
  static getJqps = procedure({
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
