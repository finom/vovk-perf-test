import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyr")
export default class JyrController {
  @operation({
    summary: "Get Jyr",
  })
  @get()
  static getJyr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyr",
  })
  @post("{id}")
  static createJyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
