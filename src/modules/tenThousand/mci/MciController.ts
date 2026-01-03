import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcis")
export default class MciController {
  @operation({
    summary: "Get Mcis",
  })
  @get()
  static getMcis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mci",
  })
  @post("{id}")
  static createMci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
