import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvo")
export default class KvoController {
  @operation({
    summary: "Get Kvo",
  })
  @get()
  static getKvo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvo",
  })
  @post("{id}")
  static createKvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
