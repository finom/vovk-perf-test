import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvus")
export default class DvuController {
  @operation({
    summary: "Get Dvus",
  })
  @get()
  static getDvus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvu",
  })
  @post("{id}")
  static createDvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
