import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqz")
export default class MqzController {
  @operation({
    summary: "Get Mqz",
  })
  @get()
  static getMqz = procedure({
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
