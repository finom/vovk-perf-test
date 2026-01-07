import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jge")
export default class JgeController {
  @operation({
    summary: "Get Jge",
  })
  @get()
  static getJge = procedure({
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
