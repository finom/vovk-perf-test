import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrm")
export default class HrmController {
  @operation({
    summary: "Get Hrm",
  })
  @get()
  static getHrm = procedure({
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
