import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqo")
export default class HqoController {
  @operation({
    summary: "Get Hqo",
  })
  @get()
  static getHqo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqo",
  })
  @post("{id}")
  static createHqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
