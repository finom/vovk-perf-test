import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jah")
export default class JahController {
  @operation({
    summary: "Get Jah",
  })
  @get()
  static getJah = procedure({
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
