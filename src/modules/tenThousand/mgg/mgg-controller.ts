import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgg")
export default class MggController {
  @operation({
    summary: "Get Mgg",
  })
  @get()
  static getMgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgg",
  })
  @post("{id}")
  static createMgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
