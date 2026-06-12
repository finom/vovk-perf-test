import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mf")
export default class MfController {
  @operation({
    summary: "Get Mf",
  })
  @get()
  static getMf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mf",
  })
  @post("{id}")
  static createMf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
