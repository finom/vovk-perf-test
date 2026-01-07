import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kac")
export default class KacController {
  @operation({
    summary: "Get Kac",
  })
  @get()
  static getKac = procedure({
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
