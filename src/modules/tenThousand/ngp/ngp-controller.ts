import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngp")
export default class NgpController {
  @operation({
    summary: "Get Ngp",
  })
  @get()
  static getNgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngp",
  })
  @post("{id}")
  static createNgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
