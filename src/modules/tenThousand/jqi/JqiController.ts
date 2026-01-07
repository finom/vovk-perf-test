import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqi")
export default class JqiController {
  @operation({
    summary: "Get Jqi",
  })
  @get()
  static getJqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqi",
  })
  @post("{id}")
  static createJqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
