import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njh")
export default class NjhController {
  @operation({
    summary: "Get Njh",
  })
  @get()
  static getNjh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njh",
  })
  @post("{id}")
  static createNjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
