import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsd")
export default class LsdController {
  @operation({
    summary: "Get Lsd",
  })
  @get()
  static getLsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsd",
  })
  @post("{id}")
  static createLsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
