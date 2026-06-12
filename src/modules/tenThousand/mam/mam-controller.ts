import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mam")
export default class MamController {
  @operation({
    summary: "Get Mam",
  })
  @get()
  static getMam = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mam",
  })
  @post("{id}")
  static createMam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
