import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hufs")
export default class HufController {
  @operation({
    summary: "Get Hufs",
  })
  @get()
  static getHufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huf",
  })
  @post("{id}")
  static createHuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
