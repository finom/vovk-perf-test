import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoa")
export default class HoaController {
  @operation({
    summary: "Get Hoa",
  })
  @get()
  static getHoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoa",
  })
  @post("{id}")
  static createHoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
