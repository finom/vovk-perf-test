import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqc")
export default class MqcController {
  @operation({
    summary: "Get Mqc",
  })
  @get()
  static getMqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqc",
  })
  @post("{id}")
  static createMqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
