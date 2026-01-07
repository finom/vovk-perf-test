import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egl")
export default class EglController {
  @operation({
    summary: "Get Egl",
  })
  @get()
  static getEgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egl",
  })
  @post("{id}")
  static createEgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
