import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsl")
export default class NslController {
  @operation({
    summary: "Get Nsl",
  })
  @get()
  static getNsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsl",
  })
  @post("{id}")
  static createNsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
