import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsb")
export default class DsbController {
  @operation({
    summary: "Get Dsb",
  })
  @get()
  static getDsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsb",
  })
  @post("{id}")
  static createDsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
