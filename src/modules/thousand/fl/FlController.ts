import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fls")
export default class FlController {
  @operation({
    summary: "Get Fls",
  })
  @get()
  static getFls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fl",
  })
  @post("{id}")
  static createFl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
