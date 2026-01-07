import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rm")
export default class RmController {
  @operation({
    summary: "Get Rm",
  })
  @get()
  static getRm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rm",
  })
  @post("{id}")
  static createRm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
