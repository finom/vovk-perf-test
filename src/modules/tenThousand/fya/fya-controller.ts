import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fya")
export default class FyaController {
  @operation({
    summary: "Get Fya",
  })
  @get()
  static getFya = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fya",
  })
  @post("{id}")
  static createFya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
