import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iur")
export default class IurController {
  @operation({
    summary: "Get Iur",
  })
  @get()
  static getIur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iur",
  })
  @post("{id}")
  static createIur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
