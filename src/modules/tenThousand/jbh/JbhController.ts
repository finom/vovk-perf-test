import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbhs")
export default class JbhController {
  @operation({
    summary: "Get Jbhs",
  })
  @get()
  static getJbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbh",
  })
  @post("{id}")
  static createJbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
