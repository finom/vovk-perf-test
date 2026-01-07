import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzi")
export default class JziController {
  @operation({
    summary: "Get Jzi",
  })
  @get()
  static getJzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzi",
  })
  @post("{id}")
  static createJzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
