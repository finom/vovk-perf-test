import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrs")
export default class JrController {
  @operation({
    summary: "Get Jrs",
  })
  @get()
  static getJrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jr",
  })
  @post("{id}")
  static createJr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
