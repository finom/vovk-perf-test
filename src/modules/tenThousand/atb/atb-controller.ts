import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atb")
export default class AtbController {
  @operation({
    summary: "Get Atb",
  })
  @get()
  static getAtb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atb",
  })
  @post("{id}")
  static createAtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
