import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("keb")
export default class KebController {
  @operation({
    summary: "Get Keb",
  })
  @get()
  static getKeb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Keb",
  })
  @post("{id}")
  static createKeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
