import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncq")
export default class NcqController {
  @operation({
    summary: "Get Ncq",
  })
  @get()
  static getNcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncq",
  })
  @post("{id}")
  static createNcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
