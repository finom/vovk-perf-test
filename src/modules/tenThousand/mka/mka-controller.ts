import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mka")
export default class MkaController {
  @operation({
    summary: "Get Mka",
  })
  @get()
  static getMka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mka",
  })
  @post("{id}")
  static createMka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
