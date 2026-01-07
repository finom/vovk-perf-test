import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpm")
export default class JpmController {
  @operation({
    summary: "Get Jpm",
  })
  @get()
  static getJpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpm",
  })
  @post("{id}")
  static createJpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
