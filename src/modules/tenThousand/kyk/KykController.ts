import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyk")
export default class KykController {
  @operation({
    summary: "Get Kyk",
  })
  @get()
  static getKyk = procedure({
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
