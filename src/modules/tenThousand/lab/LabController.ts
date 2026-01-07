import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lab")
export default class LabController {
  @operation({
    summary: "Get Lab",
  })
  @get()
  static getLab = procedure({
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
