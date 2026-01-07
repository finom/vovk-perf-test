import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmy")
export default class DmyController {
  @operation({
    summary: "Get Dmy",
  })
  @get()
  static getDmy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmy",
  })
  @post("{id}")
  static createDmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
