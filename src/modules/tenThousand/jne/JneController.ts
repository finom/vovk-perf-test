import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnes")
export default class JneController {
  @operation({
    summary: "Get Jnes",
  })
  @get()
  static getJnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jne",
  })
  @post("{id}")
  static createJne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
