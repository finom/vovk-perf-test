import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhrs")
export default class JhrController {
  @operation({
    summary: "Get Jhrs",
  })
  @get()
  static getJhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhr",
  })
  @post("{id}")
  static createJhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
