import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndi")
export default class NdiController {
  @operation({
    summary: "Get Ndi",
  })
  @get()
  static getNdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndi",
  })
  @post("{id}")
  static createNdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
