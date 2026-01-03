import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieqs")
export default class IeqController {
  @operation({
    summary: "Get Ieqs",
  })
  @get()
  static getIeqs = procedure({
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
