import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhw")
export default class DhwController {
  @operation({
    summary: "Get Dhw",
  })
  @get()
  static getDhw = procedure({
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
