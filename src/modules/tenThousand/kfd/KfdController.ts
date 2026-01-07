import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfd")
export default class KfdController {
  @operation({
    summary: "Get Kfd",
  })
  @get()
  static getKfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfd",
  })
  @post("{id}")
  static createKfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
