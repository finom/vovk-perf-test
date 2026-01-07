import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmd")
export default class HmdController {
  @operation({
    summary: "Get Hmd",
  })
  @get()
  static getHmd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmd",
  })
  @post("{id}")
  static createHmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
