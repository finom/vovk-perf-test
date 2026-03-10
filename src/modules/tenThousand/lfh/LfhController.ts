import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfh")
export default class LfhController {
  @operation({
    summary: "Get Lfh",
  })
  @get()
  static getLfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfh",
  })
  @post("{id}")
  static createLfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
