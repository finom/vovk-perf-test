import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njy")
export default class NjyController {
  @operation({
    summary: "Get Njy",
  })
  @get()
  static getNjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njy",
  })
  @post("{id}")
  static createNjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
