import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddies")
export default class DdyController {
  @operation({
    summary: "Get Ddies",
  })
  @get()
  static getDdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddy",
  })
  @post("{id}")
  static createDdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
