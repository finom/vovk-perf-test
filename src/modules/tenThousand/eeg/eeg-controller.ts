import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eeg")
export default class EegController {
  @operation({
    summary: "Get Eeg",
  })
  @get()
  static getEeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eeg",
  })
  @post("{id}")
  static createEeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
