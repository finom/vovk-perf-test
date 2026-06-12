import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muf")
export default class MufController {
  @operation({
    summary: "Get Muf",
  })
  @get()
  static getMuf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muf",
  })
  @post("{id}")
  static createMuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
