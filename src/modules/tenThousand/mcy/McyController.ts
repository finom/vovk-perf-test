import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcy")
export default class McyController {
  @operation({
    summary: "Get Mcy",
  })
  @get()
  static getMcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcy",
  })
  @post("{id}")
  static createMcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
