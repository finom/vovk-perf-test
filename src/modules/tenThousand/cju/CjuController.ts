import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjus")
export default class CjuController {
  @operation({
    summary: "Get Cjus",
  })
  @get()
  static getCjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cju",
  })
  @post("{id}")
  static createCju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
