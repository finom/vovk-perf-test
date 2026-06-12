import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwu")
export default class LwuController {
  @operation({
    summary: "Get Lwu",
  })
  @get()
  static getLwu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwu",
  })
  @post("{id}")
  static createLwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
