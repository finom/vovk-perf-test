import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jln")
export default class JlnController {
  @operation({
    summary: "Get Jln",
  })
  @get()
  static getJln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jln",
  })
  @post("{id}")
  static createJln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
