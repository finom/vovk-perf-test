import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nih")
export default class NihController {
  @operation({
    summary: "Get Nih",
  })
  @get()
  static getNih = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nih",
  })
  @post("{id}")
  static createNih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
