import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhz")
export default class DhzController {
  @operation({
    summary: "Get Dhz",
  })
  @get()
  static getDhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhz",
  })
  @post("{id}")
  static createDhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
