import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqts")
export default class MqtController {
  @operation({
    summary: "Get Mqts",
  })
  @get()
  static getMqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqt",
  })
  @post("{id}")
  static createMqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
