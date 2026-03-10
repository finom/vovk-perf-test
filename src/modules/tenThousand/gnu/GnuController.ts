import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnu")
export default class GnuController {
  @operation({
    summary: "Get Gnu",
  })
  @get()
  static getGnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnu",
  })
  @post("{id}")
  static createGnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
