import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqe")
export default class MqeController {
  @operation({
    summary: "Get Mqe",
  })
  @get()
  static getMqe = procedure({
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
