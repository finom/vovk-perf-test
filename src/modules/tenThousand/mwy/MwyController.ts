import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwy")
export default class MwyController {
  @operation({
    summary: "Get Mwy",
  })
  @get()
  static getMwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwy",
  })
  @post("{id}")
  static createMwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
