import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kud")
export default class KudController {
  @operation({
    summary: "Get Kud",
  })
  @get()
  static getKud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kud",
  })
  @post("{id}")
  static createKud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
