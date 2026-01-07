import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqy")
export default class MqyController {
  @operation({
    summary: "Get Mqy",
  })
  @get()
  static getMqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqy",
  })
  @post("{id}")
  static createMqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
