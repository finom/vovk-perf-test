import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tg")
export default class TgController {
  @operation({
    summary: "Get Tg",
  })
  @get()
  static getTg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tg",
  })
  @post("{id}")
  static createTg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
