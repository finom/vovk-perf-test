import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enos")
export default class EnoController {
  @operation({
    summary: "Get Enos",
  })
  @get()
  static getEnos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eno",
  })
  @post("{id}")
  static createEno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
