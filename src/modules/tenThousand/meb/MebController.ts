import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("meb")
export default class MebController {
  @operation({
    summary: "Get Meb",
  })
  @get()
  static getMeb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Meb",
  })
  @post("{id}")
  static createMeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
