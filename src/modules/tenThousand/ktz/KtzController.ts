import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktz")
export default class KtzController {
  @operation({
    summary: "Get Ktz",
  })
  @get()
  static getKtz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktz",
  })
  @post("{id}")
  static createKtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
