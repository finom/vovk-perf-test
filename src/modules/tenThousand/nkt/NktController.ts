import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkt")
export default class NktController {
  @operation({
    summary: "Get Nkt",
  })
  @get()
  static getNkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkt",
  })
  @post("{id}")
  static createNkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
