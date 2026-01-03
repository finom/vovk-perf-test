import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrjs")
export default class HrjController {
  @operation({
    summary: "Get Hrjs",
  })
  @get()
  static getHrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrj",
  })
  @post("{id}")
  static createHrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
