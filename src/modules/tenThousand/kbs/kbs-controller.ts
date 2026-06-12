import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbs")
export default class KbsController {
  @operation({
    summary: "Get Kbs",
  })
  @get()
  static getKbs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbs",
  })
  @post("{id}")
  static createKbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
