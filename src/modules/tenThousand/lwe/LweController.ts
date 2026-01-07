import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwe")
export default class LweController {
  @operation({
    summary: "Get Lwe",
  })
  @get()
  static getLwe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwe",
  })
  @post("{id}")
  static createLwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
