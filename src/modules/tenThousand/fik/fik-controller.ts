import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fik")
export default class FikController {
  @operation({
    summary: "Get Fik",
  })
  @get()
  static getFik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fik",
  })
  @post("{id}")
  static createFik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
