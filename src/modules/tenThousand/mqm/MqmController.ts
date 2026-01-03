import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqms")
export default class MqmController {
  @operation({
    summary: "Get Mqms",
  })
  @get()
  static getMqms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqm",
  })
  @post("{id}")
  static createMqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
