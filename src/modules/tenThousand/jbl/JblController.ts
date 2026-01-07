import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbl")
export default class JblController {
  @operation({
    summary: "Get Jbl",
  })
  @get()
  static getJbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbl",
  })
  @post("{id}")
  static createJbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
