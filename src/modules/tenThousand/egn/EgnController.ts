import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egn")
export default class EgnController {
  @operation({
    summary: "Get Egn",
  })
  @get()
  static getEgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egn",
  })
  @post("{id}")
  static createEgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
