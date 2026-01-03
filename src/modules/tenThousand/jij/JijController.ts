import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jijs")
export default class JijController {
  @operation({
    summary: "Get Jijs",
  })
  @get()
  static getJijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jij",
  })
  @post("{id}")
  static createJij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
