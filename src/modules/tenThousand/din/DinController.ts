import { procedure, prefix, get, post, operation } from "vovk";

@prefix("din")
export default class DinController {
  @operation({
    summary: "Get Din",
  })
  @get()
  static getDin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Din",
  })
  @post("{id}")
  static createDin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
