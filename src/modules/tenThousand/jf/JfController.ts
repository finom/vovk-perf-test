import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jf")
export default class JfController {
  @operation({
    summary: "Get Jf",
  })
  @get()
  static getJf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jf",
  })
  @post("{id}")
  static createJf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
