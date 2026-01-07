import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgl")
export default class JglController {
  @operation({
    summary: "Get Jgl",
  })
  @get()
  static getJgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgl",
  })
  @post("{id}")
  static createJgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
