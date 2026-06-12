import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfl")
export default class MflController {
  @operation({
    summary: "Get Mfl",
  })
  @get()
  static getMfl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfl",
  })
  @post("{id}")
  static createMfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
