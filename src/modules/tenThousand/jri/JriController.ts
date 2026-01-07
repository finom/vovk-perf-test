import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jri")
export default class JriController {
  @operation({
    summary: "Get Jri",
  })
  @get()
  static getJri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jri",
  })
  @post("{id}")
  static createJri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
