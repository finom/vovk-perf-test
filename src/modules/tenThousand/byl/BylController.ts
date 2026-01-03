import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byls")
export default class BylController {
  @operation({
    summary: "Get Byls",
  })
  @get()
  static getByls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byl",
  })
  @post("{id}")
  static createByl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
