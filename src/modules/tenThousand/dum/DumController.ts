import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dum")
export default class DumController {
  @operation({
    summary: "Get Dum",
  })
  @get()
  static getDum = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dum",
  })
  @post("{id}")
  static createDum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
