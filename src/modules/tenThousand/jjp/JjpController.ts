import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjps")
export default class JjpController {
  @operation({
    summary: "Get Jjps",
  })
  @get()
  static getJjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjp",
  })
  @post("{id}")
  static createJjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
