import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vb")
export default class VbController {
  @operation({
    summary: "Get Vb",
  })
  @get()
  static getVb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vb",
  })
  @post("{id}")
  static createVb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
