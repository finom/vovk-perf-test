import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrt")
export default class LrtController {
  @operation({
    summary: "Get Lrt",
  })
  @get()
  static getLrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrt",
  })
  @post("{id}")
  static createLrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
