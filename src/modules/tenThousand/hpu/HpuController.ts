import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpu")
export default class HpuController {
  @operation({
    summary: "Get Hpu",
  })
  @get()
  static getHpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpu",
  })
  @post("{id}")
  static createHpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
