import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kov")
export default class KovController {
  @operation({
    summary: "Get Kov",
  })
  @get()
  static getKov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kov",
  })
  @post("{id}")
  static createKov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
