import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipl")
export default class IplController {
  @operation({
    summary: "Get Ipl",
  })
  @get()
  static getIpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipl",
  })
  @post("{id}")
  static createIpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
