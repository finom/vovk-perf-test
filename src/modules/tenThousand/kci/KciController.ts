import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kci")
export default class KciController {
  @operation({
    summary: "Get Kci",
  })
  @get()
  static getKci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kci",
  })
  @post("{id}")
  static createKci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
