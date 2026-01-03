import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jahs")
export default class JahController {
  @operation({
    summary: "Get Jahs",
  })
  @get()
  static getJahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jah",
  })
  @post("{id}")
  static createJah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
