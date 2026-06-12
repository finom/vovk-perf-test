import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mry")
export default class MryController {
  @operation({
    summary: "Get Mry",
  })
  @get()
  static getMry = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mry",
  })
  @post("{id}")
  static createMry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
