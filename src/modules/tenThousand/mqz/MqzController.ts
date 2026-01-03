import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqzs")
export default class MqzController {
  @operation({
    summary: "Get Mqzs",
  })
  @get()
  static getMqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqz",
  })
  @post("{id}")
  static createMqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
