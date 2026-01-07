import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sy")
export default class SyController {
  @operation({
    summary: "Get Sy",
  })
  @get()
  static getSy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sy",
  })
  @post("{id}")
  static createSy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
