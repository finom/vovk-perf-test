import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cals")
export default class CalController {
  @operation({
    summary: "Get Cals",
  })
  @get()
  static getCals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cal",
  })
  @post("{id}")
  static createCal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
