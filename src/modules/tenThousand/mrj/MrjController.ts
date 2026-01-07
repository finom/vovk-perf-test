import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrj")
export default class MrjController {
  @operation({
    summary: "Get Mrj",
  })
  @get()
  static getMrj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrj",
  })
  @post("{id}")
  static createMrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
