import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njf")
export default class NjfController {
  @operation({
    summary: "Get Njf",
  })
  @get()
  static getNjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njf",
  })
  @post("{id}")
  static createNjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
