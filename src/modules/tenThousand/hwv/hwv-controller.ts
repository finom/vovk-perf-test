import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwv")
export default class HwvController {
  @operation({
    summary: "Get Hwv",
  })
  @get()
  static getHwv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwv",
  })
  @post("{id}")
  static createHwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
