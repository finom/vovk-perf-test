import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fft")
export default class FftController {
  @operation({
    summary: "Get Fft",
  })
  @get()
  static getFft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fft",
  })
  @post("{id}")
  static createFft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
