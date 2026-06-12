import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("miw")
export default class MiwController {
  @operation({
    summary: "Get Miw",
  })
  @get()
  static getMiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Miw",
  })
  @post("{id}")
  static createMiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
