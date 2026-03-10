import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngx")
export default class NgxController {
  @operation({
    summary: "Get Ngx",
  })
  @get()
  static getNgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngx",
  })
  @post("{id}")
  static createNgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
