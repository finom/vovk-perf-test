import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mns")
export default class MnsController {
  @operation({
    summary: "Get Mns",
  })
  @get()
  static getMns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mns",
  })
  @post("{id}")
  static createMns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
