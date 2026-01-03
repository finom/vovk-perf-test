import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhps")
export default class DhpController {
  @operation({
    summary: "Get Dhps",
  })
  @get()
  static getDhps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhp",
  })
  @post("{id}")
  static createDhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
