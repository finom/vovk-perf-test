import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwk")
export default class LwkController {
  @operation({
    summary: "Get Lwk",
  })
  @get()
  static getLwk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwk",
  })
  @post("{id}")
  static createLwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
