import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcf")
export default class GcfController {
  @operation({
    summary: "Get Gcf",
  })
  @get()
  static getGcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcf",
  })
  @post("{id}")
  static createGcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
