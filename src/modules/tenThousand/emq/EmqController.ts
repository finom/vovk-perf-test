import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emq")
export default class EmqController {
  @operation({
    summary: "Get Emq",
  })
  @get()
  static getEmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emq",
  })
  @post("{id}")
  static createEmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
