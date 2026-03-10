import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lne")
export default class LneController {
  @operation({
    summary: "Get Lne",
  })
  @get()
  static getLne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lne",
  })
  @post("{id}")
  static createLne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
