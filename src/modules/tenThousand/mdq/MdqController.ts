import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdqs")
export default class MdqController {
  @operation({
    summary: "Get Mdqs",
  })
  @get()
  static getMdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdq",
  })
  @post("{id}")
  static createMdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
