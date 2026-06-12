import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njq")
export default class NjqController {
  @operation({
    summary: "Get Njq",
  })
  @get()
  static getNjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njq",
  })
  @post("{id}")
  static createNjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
