import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyn")
export default class LynController {
  @operation({
    summary: "Get Lyn",
  })
  @get()
  static getLyn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyn",
  })
  @post("{id}")
  static createLyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
