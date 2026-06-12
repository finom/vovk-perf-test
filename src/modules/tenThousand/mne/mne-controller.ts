import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mne")
export default class MneController {
  @operation({
    summary: "Get Mne",
  })
  @get()
  static getMne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mne",
  })
  @post("{id}")
  static createMne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
