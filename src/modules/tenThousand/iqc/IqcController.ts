import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqcs")
export default class IqcController {
  @operation({
    summary: "Get Iqcs",
  })
  @get()
  static getIqcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqc",
  })
  @post("{id}")
  static createIqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
