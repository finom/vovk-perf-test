import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfds")
export default class KfdController {
  @operation({
    summary: "Get Kfds",
  })
  @get()
  static getKfds = procedure({
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
