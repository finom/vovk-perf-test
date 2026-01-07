import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jij")
export default class JijController {
  @operation({
    summary: "Get Jij",
  })
  @get()
  static getJij = procedure({
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
