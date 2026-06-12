import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nai")
export default class NaiController {
  @operation({
    summary: "Get Nai",
  })
  @get()
  static getNai = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nai",
  })
  @post("{id}")
  static createNai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
