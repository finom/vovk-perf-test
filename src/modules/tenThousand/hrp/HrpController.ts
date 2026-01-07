import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrp")
export default class HrpController {
  @operation({
    summary: "Get Hrp",
  })
  @get()
  static getHrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrp",
  })
  @post("{id}")
  static createHrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
