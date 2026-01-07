import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzc")
export default class KzcController {
  @operation({
    summary: "Get Kzc",
  })
  @get()
  static getKzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzc",
  })
  @post("{id}")
  static createKzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
