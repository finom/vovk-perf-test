import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncc")
export default class NccController {
  @operation({
    summary: "Get Ncc",
  })
  @get()
  static getNcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncc",
  })
  @post("{id}")
  static createNcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
