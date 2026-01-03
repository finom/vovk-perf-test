import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhcs")
export default class DhcController {
  @operation({
    summary: "Get Dhcs",
  })
  @get()
  static getDhcs = procedure({
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
