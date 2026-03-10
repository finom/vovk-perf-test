import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddi")
export default class DdiController {
  @operation({
    summary: "Get Ddi",
  })
  @get()
  static getDdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddi",
  })
  @post("{id}")
  static createDdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
