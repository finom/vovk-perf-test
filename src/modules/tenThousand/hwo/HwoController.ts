import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwos")
export default class HwoController {
  @operation({
    summary: "Get Hwos",
  })
  @get()
  static getHwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwo",
  })
  @post("{id}")
  static createHwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
