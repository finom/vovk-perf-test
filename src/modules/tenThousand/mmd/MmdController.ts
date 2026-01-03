import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmds")
export default class MmdController {
  @operation({
    summary: "Get Mmds",
  })
  @get()
  static getMmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmd",
  })
  @post("{id}")
  static createMmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
