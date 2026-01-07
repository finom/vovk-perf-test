import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyk")
export default class JykController {
  @operation({
    summary: "Get Jyk",
  })
  @get()
  static getJyk = procedure({
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
