import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmb")
export default class MmbController {
  @operation({
    summary: "Get Mmb",
  })
  @get()
  static getMmb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmb",
  })
  @post("{id}")
  static createMmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
