import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njd")
export default class NjdController {
  @operation({
    summary: "Get Njd",
  })
  @get()
  static getNjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njd",
  })
  @post("{id}")
  static createNjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
