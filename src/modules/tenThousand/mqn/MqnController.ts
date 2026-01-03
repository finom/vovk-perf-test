import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqns")
export default class MqnController {
  @operation({
    summary: "Get Mqns",
  })
  @get()
  static getMqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqn",
  })
  @post("{id}")
  static createMqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
