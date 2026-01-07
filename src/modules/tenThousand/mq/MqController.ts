import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mq")
export default class MqController {
  @operation({
    summary: "Get Mq",
  })
  @get()
  static getMq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mq",
  })
  @post("{id}")
  static createMq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
