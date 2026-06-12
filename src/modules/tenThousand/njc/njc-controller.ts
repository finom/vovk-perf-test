import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njc")
export default class NjcController {
  @operation({
    summary: "Get Njc",
  })
  @get()
  static getNjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njc",
  })
  @post("{id}")
  static createNjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
