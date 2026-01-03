import { procedure, prefix, get, post, operation } from "vovk";

@prefix("devs")
export default class DevController {
  @operation({
    summary: "Get Devs",
  })
  @get()
  static getDevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dev",
  })
  @post("{id}")
  static createDev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
