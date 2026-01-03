import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ats")
export default class AtController {
  @operation({
    summary: "Get Ats",
  })
  @get()
  static getAts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create At",
  })
  @post("{id}")
  static createAt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
