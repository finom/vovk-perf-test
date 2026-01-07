import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ied")
export default class IedController {
  @operation({
    summary: "Get Ied",
  })
  @get()
  static getIed = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ied",
  })
  @post("{id}")
  static createIed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
