import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdi")
export default class GdiController {
  @operation({
    summary: "Get Gdi",
  })
  @get()
  static getGdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdi",
  })
  @post("{id}")
  static createGdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
