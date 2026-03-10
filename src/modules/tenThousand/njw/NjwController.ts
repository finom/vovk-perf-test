import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njw")
export default class NjwController {
  @operation({
    summary: "Get Njw",
  })
  @get()
  static getNjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njw",
  })
  @post("{id}")
  static createNjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
