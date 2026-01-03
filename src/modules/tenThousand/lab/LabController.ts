import { procedure, prefix, get, post, operation } from "vovk";

@prefix("labs")
export default class LabController {
  @operation({
    summary: "Get Labs",
  })
  @get()
  static getLabs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lab",
  })
  @post("{id}")
  static createLab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
