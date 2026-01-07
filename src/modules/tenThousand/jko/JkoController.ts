import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jko")
export default class JkoController {
  @operation({
    summary: "Get Jko",
  })
  @get()
  static getJko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jko",
  })
  @post("{id}")
  static createJko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
