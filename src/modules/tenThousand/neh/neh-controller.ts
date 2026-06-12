import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("neh")
export default class NehController {
  @operation({
    summary: "Get Neh",
  })
  @get()
  static getNeh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Neh",
  })
  @post("{id}")
  static createNeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
