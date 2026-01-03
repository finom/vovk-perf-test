import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezts")
export default class EztController {
  @operation({
    summary: "Get Ezts",
  })
  @get()
  static getEzts = procedure({
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
