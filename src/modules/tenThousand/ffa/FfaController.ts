import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffa")
export default class FfaController {
  @operation({
    summary: "Get Ffa",
  })
  @get()
  static getFfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffa",
  })
  @post("{id}")
  static createFfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
