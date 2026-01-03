import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzes")
export default class FzeController {
  @operation({
    summary: "Get Fzes",
  })
  @get()
  static getFzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fze",
  })
  @post("{id}")
  static createFze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
