import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inhs")
export default class InhController {
  @operation({
    summary: "Get Inhs",
  })
  @get()
  static getInhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inh",
  })
  @post("{id}")
  static createInh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
