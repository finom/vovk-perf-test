import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jol")
export default class JolController {
  @operation({
    summary: "Get Jol",
  })
  @get()
  static getJol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jol",
  })
  @post("{id}")
  static createJol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
