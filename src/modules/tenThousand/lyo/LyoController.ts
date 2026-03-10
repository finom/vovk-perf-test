import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyo")
export default class LyoController {
  @operation({
    summary: "Get Lyo",
  })
  @get()
  static getLyo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyo",
  })
  @post("{id}")
  static createLyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
