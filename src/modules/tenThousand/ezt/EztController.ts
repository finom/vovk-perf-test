import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezt")
export default class EztController {
  @operation({
    summary: "Get Ezt",
  })
  @get()
  static getEzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezt",
  })
  @post("{id}")
  static createEzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
