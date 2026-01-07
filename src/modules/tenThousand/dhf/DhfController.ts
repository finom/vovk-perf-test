import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhf")
export default class DhfController {
  @operation({
    summary: "Get Dhf",
  })
  @get()
  static getDhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhf",
  })
  @post("{id}")
  static createDhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
