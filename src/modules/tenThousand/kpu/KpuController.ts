import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpu")
export default class KpuController {
  @operation({
    summary: "Get Kpu",
  })
  @get()
  static getKpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpu",
  })
  @post("{id}")
  static createKpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
