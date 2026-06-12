import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qx")
export default class QxController {
  @operation({
    summary: "Get Qx",
  })
  @get()
  static getQx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qx",
  })
  @post("{id}")
  static createQx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
