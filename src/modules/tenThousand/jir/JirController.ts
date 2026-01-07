import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jir")
export default class JirController {
  @operation({
    summary: "Get Jir",
  })
  @get()
  static getJir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jir",
  })
  @post("{id}")
  static createJir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
