import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbo")
export default class JboController {
  @operation({
    summary: "Get Jbo",
  })
  @get()
  static getJbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbo",
  })
  @post("{id}")
  static createJbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
