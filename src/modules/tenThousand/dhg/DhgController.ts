import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhgs")
export default class DhgController {
  @operation({
    summary: "Get Dhgs",
  })
  @get()
  static getDhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhg",
  })
  @post("{id}")
  static createDhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
