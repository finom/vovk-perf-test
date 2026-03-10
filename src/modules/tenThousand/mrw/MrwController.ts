import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrw")
export default class MrwController {
  @operation({
    summary: "Get Mrw",
  })
  @get()
  static getMrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrw",
  })
  @post("{id}")
  static createMrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
