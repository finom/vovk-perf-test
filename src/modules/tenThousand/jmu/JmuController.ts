import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmu")
export default class JmuController {
  @operation({
    summary: "Get Jmu",
  })
  @get()
  static getJmu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmu",
  })
  @post("{id}")
  static createJmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
