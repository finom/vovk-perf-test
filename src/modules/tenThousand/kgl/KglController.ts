import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgl")
export default class KglController {
  @operation({
    summary: "Get Kgl",
  })
  @get()
  static getKgl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgl",
  })
  @post("{id}")
  static createKgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
