import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmw")
export default class MmwController {
  @operation({
    summary: "Get Mmw",
  })
  @get()
  static getMmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmw",
  })
  @post("{id}")
  static createMmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
