import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chk")
export default class ChkController {
  @operation({
    summary: "Get Chk",
  })
  @get()
  static getChk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chk",
  })
  @post("{id}")
  static createChk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
