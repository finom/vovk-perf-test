import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkn")
export default class NknController {
  @operation({
    summary: "Get Nkn",
  })
  @get()
  static getNkn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkn",
  })
  @post("{id}")
  static createNkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
