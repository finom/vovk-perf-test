import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lur")
export default class LurController {
  @operation({
    summary: "Get Lur",
  })
  @get()
  static getLur = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lur",
  })
  @post("{id}")
  static createLur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
