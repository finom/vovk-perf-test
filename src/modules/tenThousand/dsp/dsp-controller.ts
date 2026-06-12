import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsp")
export default class DspController {
  @operation({
    summary: "Get Dsp",
  })
  @get()
  static getDsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsp",
  })
  @post("{id}")
  static createDsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
