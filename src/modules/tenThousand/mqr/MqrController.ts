import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqrs")
export default class MqrController {
  @operation({
    summary: "Get Mqrs",
  })
  @get()
  static getMqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqr",
  })
  @post("{id}")
  static createMqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
