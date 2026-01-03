import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amqs")
export default class AmqController {
  @operation({
    summary: "Get Amqs",
  })
  @get()
  static getAmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amq",
  })
  @post("{id}")
  static createAmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
