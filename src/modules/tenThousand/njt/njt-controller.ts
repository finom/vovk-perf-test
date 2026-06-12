import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njt")
export default class NjtController {
  @operation({
    summary: "Get Njt",
  })
  @get()
  static getNjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njt",
  })
  @post("{id}")
  static createNjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
