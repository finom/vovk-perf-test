import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhws")
export default class DhwController {
  @operation({
    summary: "Get Dhws",
  })
  @get()
  static getDhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhw",
  })
  @post("{id}")
  static createDhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
