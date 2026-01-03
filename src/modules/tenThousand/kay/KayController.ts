import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kays")
export default class KayController {
  @operation({
    summary: "Get Kays",
  })
  @get()
  static getKays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kay",
  })
  @post("{id}")
  static createKay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
