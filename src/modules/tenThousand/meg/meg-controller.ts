import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("meg")
export default class MegController {
  @operation({
    summary: "Get Meg",
  })
  @get()
  static getMeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Meg",
  })
  @post("{id}")
  static createMeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
