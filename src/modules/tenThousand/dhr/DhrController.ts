import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhrs")
export default class DhrController {
  @operation({
    summary: "Get Dhrs",
  })
  @get()
  static getDhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhr",
  })
  @post("{id}")
  static createDhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
