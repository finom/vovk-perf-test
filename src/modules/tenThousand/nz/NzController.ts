import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nz")
export default class NzController {
  @operation({
    summary: "Get Nz",
  })
  @get()
  static getNz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nz",
  })
  @post("{id}")
  static createNz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
