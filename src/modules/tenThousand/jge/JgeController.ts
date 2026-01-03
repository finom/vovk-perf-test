import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jges")
export default class JgeController {
  @operation({
    summary: "Get Jges",
  })
  @get()
  static getJges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jge",
  })
  @post("{id}")
  static createJge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
