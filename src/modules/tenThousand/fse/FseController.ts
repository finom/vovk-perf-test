import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fses")
export default class FseController {
  @operation({
    summary: "Get Fses",
  })
  @get()
  static getFses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fse",
  })
  @post("{id}")
  static createFse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
