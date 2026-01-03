import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jehs")
export default class JehController {
  @operation({
    summary: "Get Jehs",
  })
  @get()
  static getJehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeh",
  })
  @post("{id}")
  static createJeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
