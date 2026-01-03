import { procedure, prefix, get, post, operation } from "vovk";

@prefix("des")
export default class DesController {
  @operation({
    summary: "Get Des",
  })
  @get()
  static getDes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Des",
  })
  @post("{id}")
  static createDes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
