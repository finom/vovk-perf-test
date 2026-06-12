import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnt")
export default class CntController {
  @operation({
    summary: "Get Cnt",
  })
  @get()
  static getCnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnt",
  })
  @post("{id}")
  static createCnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
