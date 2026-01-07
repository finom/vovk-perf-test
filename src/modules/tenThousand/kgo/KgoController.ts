import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgo")
export default class KgoController {
  @operation({
    summary: "Get Kgo",
  })
  @get()
  static getKgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgo",
  })
  @post("{id}")
  static createKgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
