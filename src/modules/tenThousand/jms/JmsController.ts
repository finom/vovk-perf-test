import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jms")
export default class JmsController {
  @operation({
    summary: "Get Jms",
  })
  @get()
  static getJms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jms",
  })
  @post("{id}")
  static createJms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
