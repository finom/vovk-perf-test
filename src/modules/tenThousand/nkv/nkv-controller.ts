import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkv")
export default class NkvController {
  @operation({
    summary: "Get Nkv",
  })
  @get()
  static getNkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkv",
  })
  @post("{id}")
  static createNkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
