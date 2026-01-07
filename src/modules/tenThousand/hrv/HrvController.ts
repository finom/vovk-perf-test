import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrv")
export default class HrvController {
  @operation({
    summary: "Get Hrv",
  })
  @get()
  static getHrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrv",
  })
  @post("{id}")
  static createHrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
