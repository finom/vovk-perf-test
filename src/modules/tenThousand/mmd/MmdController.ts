import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmd")
export default class MmdController {
  @operation({
    summary: "Get Mmd",
  })
  @get()
  static getMmd = procedure({
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
