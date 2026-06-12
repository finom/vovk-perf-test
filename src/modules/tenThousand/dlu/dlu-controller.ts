import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlu")
export default class DluController {
  @operation({
    summary: "Get Dlu",
  })
  @get()
  static getDlu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlu",
  })
  @post("{id}")
  static createDlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
