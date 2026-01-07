import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfh")
export default class JfhController {
  @operation({
    summary: "Get Jfh",
  })
  @get()
  static getJfh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfh",
  })
  @post("{id}")
  static createJfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
