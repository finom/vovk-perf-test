import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huls")
export default class HulController {
  @operation({
    summary: "Get Huls",
  })
  @get()
  static getHuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hul",
  })
  @post("{id}")
  static createHul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
