import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwt")
export default class LwtController {
  @operation({
    summary: "Get Lwt",
  })
  @get()
  static getLwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwt",
  })
  @post("{id}")
  static createLwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
