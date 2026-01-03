import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhms")
export default class DhmController {
  @operation({
    summary: "Get Dhms",
  })
  @get()
  static getDhms = procedure({
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
