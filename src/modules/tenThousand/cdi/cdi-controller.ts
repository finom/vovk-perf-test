import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdi")
export default class CdiController {
  @operation({
    summary: "Get Cdi",
  })
  @get()
  static getCdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdi",
  })
  @post("{id}")
  static createCdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
