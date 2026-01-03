import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqas")
export default class MqaController {
  @operation({
    summary: "Get Mqas",
  })
  @get()
  static getMqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqa",
  })
  @post("{id}")
  static createMqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
