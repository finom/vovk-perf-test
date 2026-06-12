import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkw")
export default class DkwController {
  @operation({
    summary: "Get Dkw",
  })
  @get()
  static getDkw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkw",
  })
  @post("{id}")
  static createDkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
