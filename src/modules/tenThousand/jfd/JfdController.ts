import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfd")
export default class JfdController {
  @operation({
    summary: "Get Jfd",
  })
  @get()
  static getJfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfd",
  })
  @post("{id}")
  static createJfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
