import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdy")
export default class JdyController {
  @operation({
    summary: "Get Jdy",
  })
  @get()
  static getJdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdy",
  })
  @post("{id}")
  static createJdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
