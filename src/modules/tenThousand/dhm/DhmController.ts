import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhm")
export default class DhmController {
  @operation({
    summary: "Get Dhm",
  })
  @get()
  static getDhm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhm",
  })
  @post("{id}")
  static createDhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
