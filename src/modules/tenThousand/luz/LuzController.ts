import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luz")
export default class LuzController {
  @operation({
    summary: "Get Luz",
  })
  @get()
  static getLuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luz",
  })
  @post("{id}")
  static createLuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
