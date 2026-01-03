import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlis")
export default class JliController {
  @operation({
    summary: "Get Jlis",
  })
  @get()
  static getJlis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jli",
  })
  @post("{id}")
  static createJli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
