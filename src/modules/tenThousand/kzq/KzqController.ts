import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzqs")
export default class KzqController {
  @operation({
    summary: "Get Kzqs",
  })
  @get()
  static getKzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzq",
  })
  @post("{id}")
  static createKzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
