import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iob")
export default class IobController {
  @operation({
    summary: "Get Iob",
  })
  @get()
  static getIob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iob",
  })
  @post("{id}")
  static createIob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
