import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqws")
export default class MqwController {
  @operation({
    summary: "Get Mqws",
  })
  @get()
  static getMqws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqw",
  })
  @post("{id}")
  static createMqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
