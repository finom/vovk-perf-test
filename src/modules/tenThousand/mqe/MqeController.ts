import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqes")
export default class MqeController {
  @operation({
    summary: "Get Mqes",
  })
  @get()
  static getMqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqe",
  })
  @post("{id}")
  static createMqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
