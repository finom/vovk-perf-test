import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("np")
export default class NpController {
  @operation({
    summary: "Get Np",
  })
  @get()
  static getNp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Np",
  })
  @post("{id}")
  static createNp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
