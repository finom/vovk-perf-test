import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqp")
export default class MqpController {
  @operation({
    summary: "Get Mqp",
  })
  @get()
  static getMqp = procedure({
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
