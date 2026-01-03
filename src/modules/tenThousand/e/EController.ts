import { procedure, prefix, get, post, operation } from "vovk";

@prefix("es")
export default class EController {
  @operation({
    summary: "Get ES",
  })
  @get()
  static getES = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create E",
  })
  @post("{id}")
  static createE = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
