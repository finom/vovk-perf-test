import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyks")
export default class KykController {
  @operation({
    summary: "Get Kyks",
  })
  @get()
  static getKyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyk",
  })
  @post("{id}")
  static createKyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
