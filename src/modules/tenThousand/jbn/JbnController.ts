import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbns")
export default class JbnController {
  @operation({
    summary: "Get Jbns",
  })
  @get()
  static getJbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbn",
  })
  @post("{id}")
  static createJbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
