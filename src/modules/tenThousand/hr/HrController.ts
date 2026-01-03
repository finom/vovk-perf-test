import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrs")
export default class HrController {
  @operation({
    summary: "Get Hrs",
  })
  @get()
  static getHrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hr",
  })
  @post("{id}")
  static createHr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
