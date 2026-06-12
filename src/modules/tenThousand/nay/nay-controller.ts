import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nay")
export default class NayController {
  @operation({
    summary: "Get Nay",
  })
  @get()
  static getNay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nay",
  })
  @post("{id}")
  static createNay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
