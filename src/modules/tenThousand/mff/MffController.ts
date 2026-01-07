import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mff")
export default class MffController {
  @operation({
    summary: "Get Mff",
  })
  @get()
  static getMff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mff",
  })
  @post("{id}")
  static createMff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
