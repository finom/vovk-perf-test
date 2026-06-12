import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngw")
export default class NgwController {
  @operation({
    summary: "Get Ngw",
  })
  @get()
  static getNgw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngw",
  })
  @post("{id}")
  static createNgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
