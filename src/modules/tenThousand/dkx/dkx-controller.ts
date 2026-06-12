import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkx")
export default class DkxController {
  @operation({
    summary: "Get Dkx",
  })
  @get()
  static getDkx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkx",
  })
  @post("{id}")
  static createDkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
