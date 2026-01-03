import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqcs")
export default class MqcController {
  @operation({
    summary: "Get Mqcs",
  })
  @get()
  static getMqcs = procedure({
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
