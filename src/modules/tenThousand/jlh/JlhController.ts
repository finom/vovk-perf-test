import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlh")
export default class JlhController {
  @operation({
    summary: "Get Jlh",
  })
  @get()
  static getJlh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlh",
  })
  @post("{id}")
  static createJlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
