import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kihs")
export default class KihController {
  @operation({
    summary: "Get Kihs",
  })
  @get()
  static getKihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kih",
  })
  @post("{id}")
  static createKih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
