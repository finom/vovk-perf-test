import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("liw")
export default class LiwController {
  @operation({
    summary: "Get Liw",
  })
  @get()
  static getLiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Liw",
  })
  @post("{id}")
  static createLiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
