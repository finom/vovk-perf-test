import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dum")
export default class DumController {
  @operation({
    summary: "Get Dum",
  })
  @get()
  static getDum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dum",
  })
  @post("{id}")
  static createDum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
