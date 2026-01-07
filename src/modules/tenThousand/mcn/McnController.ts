import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcn")
export default class McnController {
  @operation({
    summary: "Get Mcn",
  })
  @get()
  static getMcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcn",
  })
  @post("{id}")
  static createMcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
