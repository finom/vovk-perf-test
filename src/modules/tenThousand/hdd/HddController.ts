import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdd")
export default class HddController {
  @operation({
    summary: "Get Hdd",
  })
  @get()
  static getHdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdd",
  })
  @post("{id}")
  static createHdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
