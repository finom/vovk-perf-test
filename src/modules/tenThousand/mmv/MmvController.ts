import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmv")
export default class MmvController {
  @operation({
    summary: "Get Mmv",
  })
  @get()
  static getMmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmv",
  })
  @post("{id}")
  static createMmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
