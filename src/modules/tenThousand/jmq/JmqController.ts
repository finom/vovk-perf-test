import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmq")
export default class JmqController {
  @operation({
    summary: "Get Jmq",
  })
  @get()
  static getJmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmq",
  })
  @post("{id}")
  static createJmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
