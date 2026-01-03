import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kacs")
export default class KacController {
  @operation({
    summary: "Get Kacs",
  })
  @get()
  static getKacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kac",
  })
  @post("{id}")
  static createKac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
