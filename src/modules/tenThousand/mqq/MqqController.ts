import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqqs")
export default class MqqController {
  @operation({
    summary: "Get Mqqs",
  })
  @get()
  static getMqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqq",
  })
  @post("{id}")
  static createMqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
