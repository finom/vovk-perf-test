import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msu")
export default class MsuController {
  @operation({
    summary: "Get Msu",
  })
  @get()
  static getMsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msu",
  })
  @post("{id}")
  static createMsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
