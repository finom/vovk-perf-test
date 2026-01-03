import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqps")
export default class MqpController {
  @operation({
    summary: "Get Mqps",
  })
  @get()
  static getMqps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqp",
  })
  @post("{id}")
  static createMqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
