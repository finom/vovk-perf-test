import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwd")
export default class MwdController {
  @operation({
    summary: "Get Mwd",
  })
  @get()
  static getMwd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwd",
  })
  @post("{id}")
  static createMwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
