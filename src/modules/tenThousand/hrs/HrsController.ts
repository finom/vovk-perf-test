import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrs")
export default class HrsController {
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
    summary: "Create Hrs",
  })
  @post("{id}")
  static createHrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
