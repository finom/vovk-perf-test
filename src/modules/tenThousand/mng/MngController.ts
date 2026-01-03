import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mngs")
export default class MngController {
  @operation({
    summary: "Get Mngs",
  })
  @get()
  static getMngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mng",
  })
  @post("{id}")
  static createMng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
