import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqjs")
export default class MqjController {
  @operation({
    summary: "Get Mqjs",
  })
  @get()
  static getMqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqj",
  })
  @post("{id}")
  static createMqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
