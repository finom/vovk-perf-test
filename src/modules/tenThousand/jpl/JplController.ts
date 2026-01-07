import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpl")
export default class JplController {
  @operation({
    summary: "Get Jpl",
  })
  @get()
  static getJpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpl",
  })
  @post("{id}")
  static createJpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
