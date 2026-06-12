import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nko")
export default class NkoController {
  @operation({
    summary: "Get Nko",
  })
  @get()
  static getNko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nko",
  })
  @post("{id}")
  static createNko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
