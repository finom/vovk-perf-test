import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhies")
export default class DhyController {
  @operation({
    summary: "Get Dhies",
  })
  @get()
  static getDhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhy",
  })
  @post("{id}")
  static createDhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
