import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mng")
export default class MngController {
  @operation({
    summary: "Get Mng",
  })
  @get()
  static getMng = procedure({
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
