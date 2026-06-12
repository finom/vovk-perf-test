import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbs")
export default class MbsController {
  @operation({
    summary: "Get Mbs",
  })
  @get()
  static getMbs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbs",
  })
  @post("{id}")
  static createMbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
