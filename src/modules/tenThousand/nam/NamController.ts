import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nam")
export default class NamController {
  @operation({
    summary: "Get Nam",
  })
  @get()
  static getNam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nam",
  })
  @post("{id}")
  static createNam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
