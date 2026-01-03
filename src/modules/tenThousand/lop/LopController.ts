import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lops")
export default class LopController {
  @operation({
    summary: "Get Lops",
  })
  @get()
  static getLops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lop",
  })
  @post("{id}")
  static createLop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
