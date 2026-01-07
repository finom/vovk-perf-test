import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmq")
export default class CmqController {
  @operation({
    summary: "Get Cmq",
  })
  @get()
  static getCmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmq",
  })
  @post("{id}")
  static createCmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
