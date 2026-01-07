import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdm")
export default class MdmController {
  @operation({
    summary: "Get Mdm",
  })
  @get()
  static getMdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdm",
  })
  @post("{id}")
  static createMdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
