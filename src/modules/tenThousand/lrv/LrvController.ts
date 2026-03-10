import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrv")
export default class LrvController {
  @operation({
    summary: "Get Lrv",
  })
  @get()
  static getLrv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrv",
  })
  @post("{id}")
  static createLrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
