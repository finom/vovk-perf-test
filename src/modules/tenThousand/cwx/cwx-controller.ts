import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwx")
export default class CwxController {
  @operation({
    summary: "Get Cwx",
  })
  @get()
  static getCwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwx",
  })
  @post("{id}")
  static createCwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
