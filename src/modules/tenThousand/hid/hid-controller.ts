import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hid")
export default class HidController {
  @operation({
    summary: "Get Hid",
  })
  @get()
  static getHid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hid",
  })
  @post("{id}")
  static createHid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
