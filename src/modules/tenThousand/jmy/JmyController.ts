import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmy")
export default class JmyController {
  @operation({
    summary: "Get Jmy",
  })
  @get()
  static getJmy = procedure({
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
