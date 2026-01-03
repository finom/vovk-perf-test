import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwps")
export default class CwpController {
  @operation({
    summary: "Get Cwps",
  })
  @get()
  static getCwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwp",
  })
  @post("{id}")
  static createCwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
