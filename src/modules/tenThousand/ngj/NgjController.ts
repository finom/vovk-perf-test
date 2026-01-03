import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngjs")
export default class NgjController {
  @operation({
    summary: "Get Ngjs",
  })
  @get()
  static getNgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngj",
  })
  @post("{id}")
  static createNgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
