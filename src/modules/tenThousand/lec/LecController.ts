import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lec")
export default class LecController {
  @operation({
    summary: "Get Lec",
  })
  @get()
  static getLec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lec",
  })
  @post("{id}")
  static createLec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
