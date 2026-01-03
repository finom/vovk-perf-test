import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hezs")
export default class HezController {
  @operation({
    summary: "Get Hezs",
  })
  @get()
  static getHezs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hez",
  })
  @post("{id}")
  static createHez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
