import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kecs")
export default class KecController {
  @operation({
    summary: "Get Kecs",
  })
  @get()
  static getKecs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kec",
  })
  @post("{id}")
  static createKec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
