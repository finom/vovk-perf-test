import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmx")
export default class MmxController {
  @operation({
    summary: "Get Mmx",
  })
  @get()
  static getMmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmx",
  })
  @post("{id}")
  static createMmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
