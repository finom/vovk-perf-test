import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdi")
export default class HdiController {
  @operation({
    summary: "Get Hdi",
  })
  @get()
  static getHdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdi",
  })
  @post("{id}")
  static createHdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
