import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieq")
export default class IeqController {
  @operation({
    summary: "Get Ieq",
  })
  @get()
  static getIeq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ieq",
  })
  @post("{id}")
  static createIeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
