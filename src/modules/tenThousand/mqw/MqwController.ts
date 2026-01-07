import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqw")
export default class MqwController {
  @operation({
    summary: "Get Mqw",
  })
  @get()
  static getMqw = procedure({
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
