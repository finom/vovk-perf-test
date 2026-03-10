import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dic")
export default class DicController {
  @operation({
    summary: "Get Dic",
  })
  @get()
  static getDic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dic",
  })
  @post("{id}")
  static createDic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
