import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lno")
export default class LnoController {
  @operation({
    summary: "Get Lno",
  })
  @get()
  static getLno = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lno",
  })
  @post("{id}")
  static createLno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
