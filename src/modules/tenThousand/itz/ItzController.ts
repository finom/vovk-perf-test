import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itz")
export default class ItzController {
  @operation({
    summary: "Get Itz",
  })
  @get()
  static getItz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itz",
  })
  @post("{id}")
  static createItz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
