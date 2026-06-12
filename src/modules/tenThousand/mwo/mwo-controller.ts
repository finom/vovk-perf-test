import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwo")
export default class MwoController {
  @operation({
    summary: "Get Mwo",
  })
  @get()
  static getMwo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwo",
  })
  @post("{id}")
  static createMwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
