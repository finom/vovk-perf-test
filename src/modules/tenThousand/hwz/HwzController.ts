import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwz")
export default class HwzController {
  @operation({
    summary: "Get Hwz",
  })
  @get()
  static getHwz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwz",
  })
  @post("{id}")
  static createHwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
