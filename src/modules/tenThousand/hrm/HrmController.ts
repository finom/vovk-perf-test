import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrms")
export default class HrmController {
  @operation({
    summary: "Get Hrms",
  })
  @get()
  static getHrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrm",
  })
  @post("{id}")
  static createHrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
