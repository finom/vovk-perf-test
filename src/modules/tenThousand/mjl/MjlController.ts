import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjls")
export default class MjlController {
  @operation({
    summary: "Get Mjls",
  })
  @get()
  static getMjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjl",
  })
  @post("{id}")
  static createMjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
