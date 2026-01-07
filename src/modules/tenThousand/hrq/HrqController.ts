import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrq")
export default class HrqController {
  @operation({
    summary: "Get Hrq",
  })
  @get()
  static getHrq = procedure({
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
