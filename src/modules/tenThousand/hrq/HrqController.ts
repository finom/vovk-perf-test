import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrqs")
export default class HrqController {
  @operation({
    summary: "Get Hrqs",
  })
  @get()
  static getHrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrq",
  })
  @post("{id}")
  static createHrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
