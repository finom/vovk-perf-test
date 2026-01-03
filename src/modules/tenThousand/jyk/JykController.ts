import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyks")
export default class JykController {
  @operation({
    summary: "Get Jyks",
  })
  @get()
  static getJyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyk",
  })
  @post("{id}")
  static createJyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
