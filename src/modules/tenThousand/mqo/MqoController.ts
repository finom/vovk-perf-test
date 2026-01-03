import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqos")
export default class MqoController {
  @operation({
    summary: "Get Mqos",
  })
  @get()
  static getMqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqo",
  })
  @post("{id}")
  static createMqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
