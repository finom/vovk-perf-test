import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgh")
export default class MghController {
  @operation({
    summary: "Get Mgh",
  })
  @get()
  static getMgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgh",
  })
  @post("{id}")
  static createMgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
