import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jok")
export default class JokController {
  @operation({
    summary: "Get Jok",
  })
  @get()
  static getJok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jok",
  })
  @post("{id}")
  static createJok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
