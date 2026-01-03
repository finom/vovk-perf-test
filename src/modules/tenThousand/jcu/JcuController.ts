import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcus")
export default class JcuController {
  @operation({
    summary: "Get Jcus",
  })
  @get()
  static getJcus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcu",
  })
  @post("{id}")
  static createJcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
