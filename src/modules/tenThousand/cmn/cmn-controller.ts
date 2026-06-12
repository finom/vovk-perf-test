import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmn")
export default class CmnController {
  @operation({
    summary: "Get Cmn",
  })
  @get()
  static getCmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmn",
  })
  @post("{id}")
  static createCmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
