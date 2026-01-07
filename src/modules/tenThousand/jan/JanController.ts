import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jan")
export default class JanController {
  @operation({
    summary: "Get Jan",
  })
  @get()
  static getJan = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jan",
  })
  @post("{id}")
  static createJan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
