import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bau")
export default class BauController {
  @operation({
    summary: "Get Bau",
  })
  @get()
  static getBau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bau",
  })
  @post("{id}")
  static createBau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
