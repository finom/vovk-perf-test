import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joe")
export default class JoeController {
  @operation({
    summary: "Get Joe",
  })
  @get()
  static getJoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joe",
  })
  @post("{id}")
  static createJoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
