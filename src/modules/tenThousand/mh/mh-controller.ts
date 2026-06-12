import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mh")
export default class MhController {
  @operation({
    summary: "Get Mh",
  })
  @get()
  static getMh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mh",
  })
  @post("{id}")
  static createMh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
