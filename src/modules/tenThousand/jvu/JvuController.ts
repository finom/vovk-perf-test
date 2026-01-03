import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvus")
export default class JvuController {
  @operation({
    summary: "Get Jvus",
  })
  @get()
  static getJvus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvu",
  })
  @post("{id}")
  static createJvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
