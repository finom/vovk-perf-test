import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftz")
export default class FtzController {
  @operation({
    summary: "Get Ftz",
  })
  @get()
  static getFtz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftz",
  })
  @post("{id}")
  static createFtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
