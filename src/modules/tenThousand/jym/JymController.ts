import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jym")
export default class JymController {
  @operation({
    summary: "Get Jym",
  })
  @get()
  static getJym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jym",
  })
  @post("{id}")
  static createJym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
