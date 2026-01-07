import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdw")
export default class MdwController {
  @operation({
    summary: "Get Mdw",
  })
  @get()
  static getMdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdw",
  })
  @post("{id}")
  static createMdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
