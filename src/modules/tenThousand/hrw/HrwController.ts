import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrw")
export default class HrwController {
  @operation({
    summary: "Get Hrw",
  })
  @get()
  static getHrw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrw",
  })
  @post("{id}")
  static createHrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
