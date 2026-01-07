import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dh")
export default class DhController {
  @operation({
    summary: "Get Dh",
  })
  @get()
  static getDh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dh",
  })
  @post("{id}")
  static createDh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
