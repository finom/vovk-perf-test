import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhis")
export default class DhiController {
  @operation({
    summary: "Get Dhis",
  })
  @get()
  static getDhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhi",
  })
  @post("{id}")
  static createDhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
