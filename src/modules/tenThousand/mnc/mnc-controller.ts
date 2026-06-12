import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnc")
export default class MncController {
  @operation({
    summary: "Get Mnc",
  })
  @get()
  static getMnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnc",
  })
  @post("{id}")
  static createMnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
