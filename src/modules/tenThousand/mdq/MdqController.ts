import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdq")
export default class MdqController {
  @operation({
    summary: "Get Mdq",
  })
  @get()
  static getMdq = procedure({
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
