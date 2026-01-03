import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efqs")
export default class EfqController {
  @operation({
    summary: "Get Efqs",
  })
  @get()
  static getEfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efq",
  })
  @post("{id}")
  static createEfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
