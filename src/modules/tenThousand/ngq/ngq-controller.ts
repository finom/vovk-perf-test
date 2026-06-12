import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngq")
export default class NgqController {
  @operation({
    summary: "Get Ngq",
  })
  @get()
  static getNgq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngq",
  })
  @post("{id}")
  static createNgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
