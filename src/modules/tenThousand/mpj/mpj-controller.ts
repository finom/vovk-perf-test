import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpj")
export default class MpjController {
  @operation({
    summary: "Get Mpj",
  })
  @get()
  static getMpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpj",
  })
  @post("{id}")
  static createMpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
