import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdms")
export default class MdmController {
  @operation({
    summary: "Get Mdms",
  })
  @get()
  static getMdms = procedure({
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
