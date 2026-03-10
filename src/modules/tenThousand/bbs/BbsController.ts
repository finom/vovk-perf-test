import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbs")
export default class BbsController {
  @operation({
    summary: "Get Bbs",
  })
  @get()
  static getBbs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbs",
  })
  @post("{id}")
  static createBbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
