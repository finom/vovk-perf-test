import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhc")
export default class DhcController {
  @operation({
    summary: "Get Dhc",
  })
  @get()
  static getDhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhc",
  })
  @post("{id}")
  static createDhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
