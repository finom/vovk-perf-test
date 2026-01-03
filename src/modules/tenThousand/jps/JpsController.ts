import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jps")
export default class JpsController {
  @operation({
    summary: "Get Jps",
  })
  @get()
  static getJps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jps",
  })
  @post("{id}")
  static createJps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
