import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhk")
export default class DhkController {
  @operation({
    summary: "Get Dhk",
  })
  @get()
  static getDhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhk",
  })
  @post("{id}")
  static createDhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
