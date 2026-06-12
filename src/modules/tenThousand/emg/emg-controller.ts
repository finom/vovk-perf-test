import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emg")
export default class EmgController {
  @operation({
    summary: "Get Emg",
  })
  @get()
  static getEmg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emg",
  })
  @post("{id}")
  static createEmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
