import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyas")
export default class KyaController {
  @operation({
    summary: "Get Kyas",
  })
  @get()
  static getKyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kya",
  })
  @post("{id}")
  static createKya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
