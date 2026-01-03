import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avqs")
export default class AvqController {
  @operation({
    summary: "Get Avqs",
  })
  @get()
  static getAvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avq",
  })
  @post("{id}")
  static createAvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
