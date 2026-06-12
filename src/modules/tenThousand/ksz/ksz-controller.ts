import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksz")
export default class KszController {
  @operation({
    summary: "Get Ksz",
  })
  @get()
  static getKsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksz",
  })
  @post("{id}")
  static createKsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
