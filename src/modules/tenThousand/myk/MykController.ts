import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myk")
export default class MykController {
  @operation({
    summary: "Get Myk",
  })
  @get()
  static getMyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myk",
  })
  @post("{id}")
  static createMyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
