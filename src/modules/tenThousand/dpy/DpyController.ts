import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpies")
export default class DpyController {
  @operation({
    summary: "Get Dpies",
  })
  @get()
  static getDpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpy",
  })
  @post("{id}")
  static createDpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
