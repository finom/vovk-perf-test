import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jje")
export default class JjeController {
  @operation({
    summary: "Get Jje",
  })
  @get()
  static getJje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jje",
  })
  @post("{id}")
  static createJje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
