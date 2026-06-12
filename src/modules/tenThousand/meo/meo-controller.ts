import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("meo")
export default class MeoController {
  @operation({
    summary: "Get Meo",
  })
  @get()
  static getMeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Meo",
  })
  @post("{id}")
  static createMeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
