import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmi")
export default class JmiController {
  @operation({
    summary: "Get Jmi",
  })
  @get()
  static getJmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmi",
  })
  @post("{id}")
  static createJmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
