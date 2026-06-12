import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmh")
export default class DmhController {
  @operation({
    summary: "Get Dmh",
  })
  @get()
  static getDmh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmh",
  })
  @post("{id}")
  static createDmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
