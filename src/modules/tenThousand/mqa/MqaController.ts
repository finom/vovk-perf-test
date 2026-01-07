import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqa")
export default class MqaController {
  @operation({
    summary: "Get Mqa",
  })
  @get()
  static getMqa = procedure({
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
