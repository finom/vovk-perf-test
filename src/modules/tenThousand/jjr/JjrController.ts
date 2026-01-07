import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjr")
export default class JjrController {
  @operation({
    summary: "Get Jjr",
  })
  @get()
  static getJjr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjr",
  })
  @post("{id}")
  static createJjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
