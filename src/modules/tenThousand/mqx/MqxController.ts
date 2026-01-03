import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqxes")
export default class MqxController {
  @operation({
    summary: "Get Mqxes",
  })
  @get()
  static getMqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqx",
  })
  @post("{id}")
  static createMqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
