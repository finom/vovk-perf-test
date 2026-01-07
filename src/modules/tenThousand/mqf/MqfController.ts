import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqf")
export default class MqfController {
  @operation({
    summary: "Get Mqf",
  })
  @get()
  static getMqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqf",
  })
  @post("{id}")
  static createMqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
