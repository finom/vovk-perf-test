import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jib")
export default class JibController {
  @operation({
    summary: "Get Jib",
  })
  @get()
  static getJib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jib",
  })
  @post("{id}")
  static createJib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
