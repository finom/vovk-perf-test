import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwb")
export default class HwbController {
  @operation({
    summary: "Get Hwb",
  })
  @get()
  static getHwb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwb",
  })
  @post("{id}")
  static createHwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
