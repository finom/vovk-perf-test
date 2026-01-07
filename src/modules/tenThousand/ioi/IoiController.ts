import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioi")
export default class IoiController {
  @operation({
    summary: "Get Ioi",
  })
  @get()
  static getIoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioi",
  })
  @post("{id}")
  static createIoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
