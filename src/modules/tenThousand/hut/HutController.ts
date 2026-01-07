import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hut")
export default class HutController {
  @operation({
    summary: "Get Hut",
  })
  @get()
  static getHut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hut",
  })
  @post("{id}")
  static createHut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
