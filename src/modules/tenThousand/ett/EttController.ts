import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ett")
export default class EttController {
  @operation({
    summary: "Get Ett",
  })
  @get()
  static getEtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ett",
  })
  @post("{id}")
  static createEtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
