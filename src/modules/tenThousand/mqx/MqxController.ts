import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqx")
export default class MqxController {
  @operation({
    summary: "Get Mqx",
  })
  @get()
  static getMqx = procedure({
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
