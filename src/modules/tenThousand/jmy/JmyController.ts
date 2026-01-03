import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmies")
export default class JmyController {
  @operation({
    summary: "Get Jmies",
  })
  @get()
  static getJmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmy",
  })
  @post("{id}")
  static createJmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
