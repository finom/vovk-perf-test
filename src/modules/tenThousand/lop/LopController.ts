import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lop")
export default class LopController {
  @operation({
    summary: "Get Lop",
  })
  @get()
  static getLop = procedure({
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
